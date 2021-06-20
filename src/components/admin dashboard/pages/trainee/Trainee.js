import React, { useState, useEffect } from "react";
// import "../trainee/Trainee.css";
import AddTrainee from "./AddTraineeForm";
import AllTrainees from "./AllTrainees";
import AssignTraineeCourse from "./AssignTraineeCourse";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import * as actionCreator from "../../../../store/actions/action";    

const Trainee = (props) => {
  
  const [show, setShow] = useState(false);
  const [showAssign ,setShowAssign]=useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAssignClose = () => setShowAssign(false);
  const handleAssignShow=()=>setShowAssign(true)
  
  useEffect(() =>{
    props.fetchCourses();
    props.fetchTracks();
  })

  return (
    <div className="container p-5">
      <Row className="mb-3">
        <Col>
          <div className="text-center">
            <Button variant="primary" onClick={handleShow}>
              Add Trainee
            </Button>
            {"  "}
            <Button variant="primary" onClick={handleAssignShow}>
              Assign Course / Track
            </Button>
          </div>
        </Col>
      </Row>

      <Row>
        <AllTrainees />

        {/* Add Trainee Modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add trainee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddTrainee
              closeButton = {handleClose}
             />
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Add Trainee
            </Button>
          </Modal.Footer> */}
        </Modal>

          {/* Assign Course Modal */}
          <Modal show={showAssign} onHide={handleAssignClose}>
          
          <Modal.Header closeButton>
            <Modal.Title>Assign </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AssignTraineeCourse 
            trainees = {props.trainees}
            courses = {props.courses}
            tracks = {props.tracks}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleAssignClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAssignClose}>
              Assign
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.allTrainees.loading,
    trainees: state.allTrainees.trainees,
    courses: state.allCourses.courses,
    tracks: state.allTraineeTracks.tracks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrainees: () => dispatch(actionCreator.fetchTrainees()),
    delTrainee: (id) => dispatch(actionCreator.delTrainee(id)),
    fetchCourses: () => dispatch(actionCreator.fetchCourses()),
    fetchTracks: ()=> dispatch(actionCreator.fetchTracks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trainee);