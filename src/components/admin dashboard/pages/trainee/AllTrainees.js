import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import AddTrainee from "./AddTraineeForm";
import * as actionCreator from "../../../../store/actions/action";
import Loader from "../../../../Loader";

const AllTrainees = (props) => {
  const [state, setState] = useState({show:false, trainee: {}});

  const handleClose = () => setState({show:false, trainee: {}});
  const handleShow = (trainee) => setState({show: true, trainee: trainee});

  const getRecord = (id) =>{
    // const findTrainee = trainees.find(trainee => trainee.id === id );
    // return findTrainee;
  }

  const OnEdit = () => {
    // // console.log(trainees)
    // const tempTrainee = trainees;
    // const index = tempTrainee.indexOf(getRecord(id));
    // const selectedTrainee = tempTrainee[index];

    // const [id, setId] = useState(selectedTrainee['id']);
    // const [email, setEmail] = useState(selectedTrainee['email']);
    // const [firstname, setFirstName] = useState(selectedTrainee['firstname']);
    // const [lastname, setLastName] = useState(selectedTrainee['lastname']);
    
    const data = {
      firstname: state.trainee.firstname,
      lastname: state.trainee.lastname,
      email: state.trainee.email,
      track: state.trainee.track
    }
    console.log(data)


  }

  let trainees = props.trainee;
  let fetched = props.loading;
  if(trainees.length < 1) props.fetchTrainees(trainees)


  const loadTrainees = fetched ? (
    <tbody>
      <tr>
        <td className="text-center" colSpan="10">
          <Loader />
        </td>
      </tr>
    </tbody>
  ) : (
    <tbody>
      {trainees.map((trainee) => {
        return (
          <tr key={trainee.id}>
            <td>{trainee.id}</td>
            <td>{trainee.firstname}</td>
            <td>{trainee.lastname}</td>
            <td>{trainee.email}</td>
            <td>{trainee.date}</td>
            <td>
              <button
                onClick={() => {
                  handleShow(trainee);
                }}
                type="button"
                className="cursor-pointer far fa-edit btn btn-success"
              />{" "}
              <button
                type="button"
                className="far fa-trash-alt btn btn-danger"
              />
            </td>
          </tr>
        );
      })}
    </tbody>
  );

  return (
    <div className="col-12 mx-auto">
      <span>
        <i className="fas fa-users" />
        <h5>All trainees</h5>
      </span>

      <table className="table table-striped table-hover">
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Date Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        {loadTrainees}
      </table>
      <Modal show={state.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Trainee</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-5">
          <AddTrainee key={state.trainee.id}
            
            firstName={state.trainee.firstname}
            lastName={state.trainee.lastname}
            email={state.trainee.email}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={OnEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.allTrainees.loading,
    trainee: state.allTrainees.trainees,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrainees: (trainees) => dispatch(actionCreator.fetchTrainees(trainees)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllTrainees);
