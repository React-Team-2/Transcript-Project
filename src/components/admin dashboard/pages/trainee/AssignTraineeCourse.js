import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import * as actionCreator from "../../../../store/actions/action";


class AssignTraineeCourse extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <form className="form">
        <Row className="mb-3">
          <Col>
            <label className="form-label">Trainee Name</label>
            <select className="form-control">
              {this.props.trainees.map(trainee =>{
                return(
                  <option>{trainee.firstname +" "+ trainee.lastname}</option>
                )
              })}
            </select>
          </Col>
          <Col>
            <label className="form-label">Course</label>
            <select className="form-control">
            {this.props.courses.map(course => {
              return(
                <option>{course.course_name}</option>
              )
            })}
            </select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <label className="form-label">Course Code</label>
            <input
              className="form-control"
              type="text"
              value="001"
              disabled
              placeholder="Course Code"
            />
          </Col>
          <Col>
            <div>
              <label className="form-label">Track</label>
              <select className="form-control">
              {this.props.tracks.map(track=>{
                return(
                  <option>{track.track_name}</option>
                )
              })}
              </select>
            </div>
          </Col>
        </Row>
      </form>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     loading: state.allTrainees.loading,
//     trainee: state.allTrainees.trainees,
//     courses: state.allCourses.courses,

//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchTrainees: (trainees) => dispatch(actionCreator.fetchTrainees(trainees)),
//     delTrainee: (id) => dispatch(actionCreator.delTrainee(id)),
//   };
// };

export default AssignTraineeCourse;

