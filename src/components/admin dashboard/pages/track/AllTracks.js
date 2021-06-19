import React, { useState } from "react";
import {connect} from "react-redux";
import {Button, Modal} from "react-bootstrap";
import axios from "axios";
import AddTrack from "./AddTrackForm";
import * as actionCreator from "../../../../store/actions/action";



const  AllTracks=(props)=> {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 

  async function fetchTracks() {
    const fetchedTracks = await axios.get(
      "https://amalitech-tms.herokuapp.com/tracks",
      {
        headers: {
          Authorization: `Bearer ${localStorage.token}`           
        },
      }
    );
    const trackData = fetchedTracks.data.result;
   console.log (trackData)
        
    trackData.map((track) => {
      const date = new Date(track.enrollment_date);
      track.enrollment_date = date.toLocaleDateString();
      return {}
    });
    props.getTracks(trackData);
  }
  if(props.tracks.length < 1) fetchTracks()

    let trackData = props.tracks;
    let fetched = props.loading;

    return (
      <div className="mt-3">
        <div className="col-12">
          <span className="d-flex align-middle">
            <i className="fas fa-file-alt" />
            <h5>All Tracks</h5>
          </span>
        </div>
        <table className="table table-striped table-hover">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Track Title</th>
              <th>Track Master</th>
              <th>Date Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {trackData.map((track,index) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{track.track_name}</td>
                  <td>{track.track_master}</td>
                  <td>{track.date_created}</td>
                  <td>
                  <button onClick={() => handleShow()}
                    type="button" className="cursor-pointer far fa-edit btn btn-success" />
                       {" "}
                    <button type="button" className="far fa-trash-alt  btn btn-danger" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Track</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-5">
        <AddTrack
            trackName="Media & Design"
            trackMaster="Emmanuel Asaber"     
        />
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
      </div>
    );
  }

 
const mapStateToProps = (state) => {
  return {
    loading: state.allTraineeTracks.fetched,
    tracks: state.allTraineeTracks.tracks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTracks: (tracks) => dispatch({ type: "UPDATE_TRACKS", payload: tracks}),
    addTracks: (track) => dispatch(actionCreator.addTracks),
  };
};
export default connect(mapStateToProps,mapDispatchToProps) (AllTracks);
