import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as actionCreator from "../../../../store/actions/action"; 

class CourseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        course_name: " ",
        course_master: " ",
        track: " ",
        courses:[],
      }
  }


  
   handleValueChange=(e)=>{
     const fieldName=e.target.name;
     switch(fieldName){
       case "course_name":
         this.setState({course_name:e.target.value})
         break;
       case "course_master":
          this.setState({course_master:e.target.value})
          break;
       case "course_duration":
          this.setState({course_duration:e.target.value})
          break;            
     }
   }


   handleSave=(e)=>{
      e.preventDefault()
      let newCourse={
        course_name:this.state.course_name,
        course_master:this.state.course_master,
        course_duration: this.state.course_duration,
      
      }
      let courseObj=[...this.state.courses,newCourse]
      this.setState({courses:courseObj},()=>{
        // console.log("New Trainee: ",...this.state.trainees)
        this.setState({
          course_name: " ",
          course_master: " ",
          course_duration: " ",

        })
      })
      this.props.addCourses(newCourse)
      console.log(newCourse)
      setTimeout(()=>{window.location.reload()}, 1000)
   }
  render() {
    const tracks = () => {
      return this.props.tracks.map((track) => {
        return (
          <option value={track.id} className="mb-1">
            {track.track_name}
          </option>
        );
      });
    };
    return (
      /*ADD COURSE HERE*/

   
        <form className="form">
          <Row className="mb-3">
            <Col>
              <div className="col">
                <label className="form-label">Course Name</label>
                <input
                name ="course_name"
                  defaultValue={this.props.courseTitle}
                  className="form-control"
                  type="text"
                  placeholder="Course name"
                  onChange={this.handleValueChange}
                />
              </div>
            </Col>
            <Col>
              <div className="col">
                <label className="form-label">Code Master</label>
                <input
                name="course_master"
                  defaultValue={this.props.courseCode}
                  className="form-control"
                  type="text"
                  placeholder="Course Master"
                  onChange={this.handleValueChange}

                />
              </div>
            </Col>
          </Row>

          <Row className="mb-3">
          <Col>
              <div className="col">
                <label className="form-label">Code Duration</label>
                <input
                name="course_duration"
                  defaultValue={this.props.courseCode}
                  className="form-control"
                  type="number"
                  placeholder="Course Duration"
                  onChange={this.handleValueChange}

                />
              </div>
            </Col>
          </Row>
          <Row className="mb-3">
          <Col><Button onClick={this.props.closeButton}>Close</Button></Col>
          <Col>
          <Button type="submit" className=" btn btn-success" onClick={this.handleSave}>
            Add
          </Button>
          </Col>
        </Row>
          
        
        </form>
     
    );
  }
}
const mapStateToProps = (state) => {
  return {
    course: state.allCourses.courses,
    tracks: state.allTraineeTracks.tracks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCourses: (course) => dispatch(actionCreator.addCourses(course)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseForm);
