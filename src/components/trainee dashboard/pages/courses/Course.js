import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../../../store/actions/action";
import "../courses/Course.css";

class course extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchTraineeCourse()
  }
 
  render() {
    
    return (
      <div class="container p-5">
        <div class="row">
          <div class="col-10">
            Track:<span class="ms-3">track_name</span>
          </div>
         
        </div>
        <div class="row mt-3">
          <div class="col-10">
            <div className="d-flex">
            <label for="sort">Sort</label>
            <select id="sort" class="form-select w-auto ms-3" aria-label="Default select example">
              <option>ASC</option>
              <option>DESC</option>
            </select>
            </div>
          </div>
          <div class="col">
            <button class="btn btn-success">Print</button>
          </div>
        </div>
        <hr/>
        <table className="table table-striped table-hover">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Course Title</th>
              <th>Course Master</th>
              <th>Date Enrolled</th>
             
            </tr>
          </thead>
          <tbody>
            {this.props.courses.map((course,index) => {
              return (
                <tr>
                  <td>{index}</td>
                  <td>{course.course_name}</td>
                  <td>{course.course_master}</td>
                  <td>{course.date_created}</td>
                 
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
     
    );
  }
}
  const mapStateToProps =state =>{
       return{
         courses: state.allCourses.courses
         
       }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchTraineeCourse: () => dispatch(actionCreator.fetchTraineeCourse()),
    };
  };

  
export default connect(mapStateToProps,mapDispatchToProps)(course);
