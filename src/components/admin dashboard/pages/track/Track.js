import React, {useState} from "react";
import AddTrack from "./AddTrackForm";
import AllTracks from "./AllTracks";
import axios from "axios"
import {Modal,Button,Row,Col} from "react-bootstrap"

const Track =()=> {
 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
 const fetchTracks= async ()=> {
    const fetchedTracks = await axios.get(
      "https://amalitech-tms.herokuapp.com/tracks?user=60ba4ef1303e0f1b04b7a26c",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplZmYucG9ydHVwaHkyQGFtYWxpdGVjaC5vcmciLCJ1c2VyX2lkIjoiNjBiYTRlZjEzMDNlMGYxYjA0YjdhMjZjIiwiaWF0IjoxNjIyOTA4ODEwfQ.QBB21xZtGNRWW_1F6Vb0V47kPIRIRHgOsnktxSA_vT4",
        },
      }
    
    );
    return fetchedTracks.data.result;
  }
    const trackData = fetchTracks()

    return (
      <div className="container p-5">
        <Row className="mb-3">
         <Col>
          <div className="col-3">
          <Button variant="primary" onClick={handleShow}>
          Create Track
          </Button>
            
          </div>
         </Col>
        </Row>
       
         <div>
         <AllTracks/>
         
         <Modal show={show} onHide={handleClose}>
           <Modal.Header closeButton>
             <Modal.Title> Add New Track</Modal.Title>
           </Modal.Header>
           <Modal.Body>
           <AddTrack/>
           </Modal.Body>
         </Modal>
         </div>
       
      </div>
    );
    }


export default Track;
