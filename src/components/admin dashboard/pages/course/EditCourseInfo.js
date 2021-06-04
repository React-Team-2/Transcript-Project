import React from "react";

export default function EditCourseInfo() {
  return (
    <div className="row">
      <form className="form">
        <div className="row mb-3">
          <div className="col">
            <label className="form-label">CourseTitle</label>
            <input className="form-control" type="text" />
          </div>
          <div className="col">
            <label className="form-label">Course Code</label>
            <input className="form-control" type="text" placeholder="" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label className="form-label">Date Created</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter email"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
