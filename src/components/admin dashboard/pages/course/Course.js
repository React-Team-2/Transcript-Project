import React, { useState } from "react";
import "../trainee/Trainee.css";
import CourseForm from "./CourseForm";
import AllCourses from "./AllCourses";
import { Button, Modal, Row, Col } from "react-bootstrap";
import "../course/Course.css";
import AssignTraineeCourse from "../trainee/AssignTraineeCourse";

const Course = (props) => {
  const [show, setShow] = useState(false);

  const state = useSelector(state => state.allCourses);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container p-5">
      <Row className="mb-3">
        <Col>
          <div className="col-3">
            <Button variant="primary" onClick={handleShow}>
              Add Course
            </Button>
          </div>
        </Col>
      </Row>

      <Row>
        <AllCourses />
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddCourse />
            
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
    </div>
  );
};



export default Course;