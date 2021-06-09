import React, { Component } from "react";
import "../trainee/Trainee.css";
import AddCourse from "./AddCourseForm";
import AllCourses from "./AllCourses";
import "../course/Course.css";

class course extends Component {
  render() {
    return (
      <div className="container p-5">
        <div className="row mb-3">
          <div className="col-3">
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#addCourse"
            >
              Add Course
            </button>
          </div>
        </div>

        <div className="row">
          <AllCourses />
          <div
            className="modal fade"
            id="addCourse"
            tabIndex={-1}
            aria-labelledby="addCourseLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <i className="fas fa-plus" />
                  <h5 className="modal-title" id="addCourseLabel">
                    Add New Course
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <AddCourse />
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
                    Save changes
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

export default course;
