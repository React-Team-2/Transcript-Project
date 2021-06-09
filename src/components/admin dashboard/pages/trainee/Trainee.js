import React, { Component } from "react";
import "../trainee/Trainee.css";
import AddTrainee from "./AddTraineeForm";
import AllTrainees from "./AllTrainees";
import AssignTraineeCourse from "./AssignTraineeCourse";

class trainee extends Component {
  render() {
    return (
      <div className="container p-5">
        <div className="row mb-3">
          <div className="col-12 text-center">
            <button className="me-2 active btn btn-primary"  
              data-bs-toggle="modal"
              data-bs-target="#addTraineeModal">
              Add trainee
            </button>
            <button className="active btn btn-primary"  
             data-bs-toggle="modal"
              data-bs-target="#assignCourseModal">Assign a course
            </button>
          </div>
        
        </div>

        <div className="row">
          <AllTrainees />
          
          <div
            className="modal fade"
            id="addTraineeModal"
            tabIndex={-1}
            aria-labelledby="addTraineeLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                <i className="fas fa-user-plus" />
                  <h5 className="modal-title" id="addTraineeTitle">
                  Add trainee
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <AddTrainee/>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-success">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div
            className="modal fade"
            id="assignCourseModal"
            tabIndex={-1}
            aria-labelledby="assignCourseLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                <i className="fas fa-plus" />
                  <h5 className="modal-title" id="assignCourseTitle">
                    Assign Course
                  </h5>
                 
           
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <AssignTraineeCourse/>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-success"  data-bs-dismiss="modal">
                    Assign
                  </button>
                </div>
              </div>
            </div>
          </div>
          
        </div>


      </div>
    );
  }
}

export default trainee;
