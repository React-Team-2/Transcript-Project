import React, { Component } from "react";

class AllCourses extends Component {
  render() {
    this.courses = [
      {
        id: "1",
        title: "Business Communication",
        code: "BCOM",
        date: "2021-03-15",
      },
      {
        id: "2",
        title: "Programming with Java",
        code: "PWJ",
        date: "2021-03-15",
      },
      {
        id: "3",
        title: "Programming with Python",
        code: "PWP",
        date: "2021-03-15",
      },
      { id: "4", title: "Creative Media", code: "CM", date: "2021-03-15" },
      { id: "5", title: "ReactJs", code: "RJS", date: "2021-03-15" },
      {
        id: "6",
        title: "Testing with Cypress",
        code: "STWC",
        date: "2021-03-15",
      },
    ];
    return (
      <div className="row mt-3">
        <div className="col-12">
          <span className="d-flex align-middle">
            <i className="fas fa-file-alt" />
            <h5>All Courses</h5>
          </span>
        </div>
        <table className="table table-striped table-hover">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Course Title</th>
              <th>Course Code</th>
              <th>Date Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.courses.map((course) => {
              return (
                <tr>
                  <td>{course.id}</td>
                  <td>{course.title}</td>
                  <td>{course.code}</td>
                  <td>{course.date}</td>
                  <td>
                    <a href="#" className="far fa-edit text-success" />
                    <a href="#" className="far fa-trash-alt text-danger ms-3" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AllCourses;
