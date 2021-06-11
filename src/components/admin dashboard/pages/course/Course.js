import React, { useState } from "react";
import "../trainee/Trainee.css";
import CourseForm from "./CourseForm";
import AllCourses from "./AllCourses";
import { Button, Modal, Row, Col } from "react-bootstrap";
import "../course/Course.css";


const Course = (props) => {
  

  const state = useSelector(state => state.allCourses);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function fetchCourses() {
    const fetchedTracks = await axios.get(
      "https://amalitech-tms.herokuapp.com/courses",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFtYWxpdGVjaC5vcmciLCJ1c2VyX2lkIjoiNjBiNjY0MmI4YzkyYmQzNWIwOWE1NDc3IiwiaWF0IjoxNjIzMjc3MTE4fQ.2lzxEW-YTQebHMTBZPMDghoaoTQWNUJ2OrzfjYfMhpg",
        },
      }
    );
    const courseData = fetchedTracks.data.result;
    
    courseData.map((course) => {
      const date = new Date(course.date_created);
      course.date_created = date.toLocaleDateString();
      return {}
    });
    dispatch({ type: "UPDATE_COURSES", payload: courseData})
  }

    if(!state.fetched){
      fetchCourses()
    }

    return (
      <div className="container p-5">
        <Row className="mb-3">
          <Col>
          <div>
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
    </div>
  );
};



export default Course;