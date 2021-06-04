import React, { Component } from "react";
import { connect } from "react-redux";
import "../courses/Course.css";

class course extends Component {
 
  render() {
     
    this.records=[
      {id:"1",title:"Programming with Java",code:"PWJ",date:"2021-01-04"},
      {id:"2",title:"Programming with Python",code:"PWJ",date:"2021-01-04"},
      {id:"3",title:"Relational Database",code:"PWJ",date:"2021-01-04"},
      {id:"4",title:"Web Engineering",code:"PWJ",date:"2021-01-04"},
      {id:"5",title:"Testing with Cypress",code:"STWC",date:"2021-03-15"},
      {id:"6",title:"ReactJs",code:"React",date:"2021-03-15"}
    ]
    
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
              <th>Course Code</th>
              <th>Date Enrolled</th>
             
            </tr>
          </thead>
          <tbody>
            {this.records.map((course) => {
              return (
                <tr>
                  <td>{course.id}</td>
                  <td>{course.title}</td>
                  <td>{course.code}</td>
                  <td>{course.date}</td>
                 
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
         courses: state.allCourse
         
       }
  }

  const mapDispatchToProps = dispatch =>{
     return{
      loadCourse:()=>dispatch({type:"COURSES"})
     }
  }
export default connect(mapStateToProps,mapDispatchToProps) (course);
