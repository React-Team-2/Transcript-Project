import React, {useState} from "react";
import AddTrack from "./AddTrackForm";
import AllTracks from "./AllTracks";
import {Modal,Button,Row,Col} from "react-bootstrap"

const Track =()=> {
 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <div className="container p-5">
        <Row className="mb-3">
         <Col>
          <div className="col-3">
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#addtrack"
            >
              Create Track
            </button>
          </div>
         </Col>
        </Row>
       
         <Row>
         <AllTracks />
         
         <Modal show={show} onHide={handleClose}>
           <Modal.Header closeButton>
             <Modal.Title> Add New Track</Modal.Title>
           </Modal.Header>
           <Modal.Body>
           <AddTrack />
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
    }


export default Track;
