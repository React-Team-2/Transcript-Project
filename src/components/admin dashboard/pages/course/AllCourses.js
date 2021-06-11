import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Modal,Row,Col } from "react-bootstrap";
import axios from "axios";
import CourseForm from "./CourseForm";

const AllCourses = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const courses = [
  //   {
  //     id: "1",
  //     title: "Business Communication",
  //     code: "BCOM",
  //     date: "2021-03-15",
  //   },
  //   {
  //     id: "2",
  //     title: "Programming with Java",
  //     code: "PWJ",
  //     date: "2021-03-15",
  //   },
  //   {
  //     id: "3",
  //     title: "Programming with Python",
  //     code: "PWP",
  //     date: "2021-03-15",
  //   },
  //   { id: "4", title: "Creative Media", code: "CM", date: "2021-03-15" },
  //   { id: "5", title: "ReactJs", code: "RJS", date: "2021-03-15" },
  //   {
  //     id: "6",
  //     title: "Testing with Cypress",
  //     code: "STWC",
  //     date: "2021-03-15",
  //   },
  // ];

  async function fetchCourses() {
    const fetchedTracks = await axios.get(
      "https://amalitech-tms.herokuapp.com/courses",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplZmYucG9ydHVwaHkyQGFtYWxpdGVjaC5vcmciLCJ1c2VyX2lkIjoiNjBiYTRlZjEzMDNlMGYxYjA0YjdhMjZjIiwiaWF0IjoxNjIyOTA4ODEwfQ.QBB21xZtGNRWW_1F6Vb0V47kPIRIRHgOsnktxSA_vT4",
        },
      }
    );
    const courseData = fetchedTracks.data.result;

    this.props.getTracks(courseData);
  }

  fetchCourses();

  let courseData = this.props.courses;
  let fetched = this.props.loading;

  return (
    <Row className="mt-3">
      <Col>
        <div>
          <span className="d-flex align-middle">
            <i className="fas fa-file-alt" />
            <h5>All Courses</h5>
          </span>
        </div>
      </Col>

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
          {courseData.map((course) => {
            return (
              <tr>
                <td>{course.id}</td>
                <td>{course.title}</td>
                <td>{course.code}</td>
                <td>{course.date}</td>
                <td className>
                  <i
                    onClick={handleShow}
                    className="cursor-pointer far fa-edit text-success"
                  />
                  <i className="far fa-trash-alt text-danger ms-3" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CourseForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
    getCourses: (courses) =>
      dispatch({ type: "UPDATE_COURSES", payload: courses }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCourses);
