import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import EditTraineeForm from "./EditTraineeForm";
import * as actionCreator from "../../../../store/actions/action";
import Loader from "../../../../Loader";

const AllTrainees = (props) => {
  const [state, setState] = useState({show:false, trainee: {}});

  useEffect(() =>{
    props.fetchTrainees(trainees)
  }, [])

  const handleClose = () => setState({show:false, trainee: {}});
  const handleShow = (trainee) => setState({show: true, trainee: trainee});


  const handleDelete = (id) => {
    props.delTrainee(id);
    setTimeout(()=>{window.location.reload()}, 1000)
  }

  let trainees = props.trainee;
  let fetched = props.loading;

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
            <td>{trainee.date_created}</td>
            <td>
              <button
                onClick={() => {
                  handleShow(trainee);
                }}
                type="button"
                className="cursor-pointer far fa-edit btn btn-success"
              />{" "}
              <button
              onClick={()=>
                handleDelete(trainee._id)
              }
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
          <EditTraineeForm key={state.trainee.id}
            closeButton={handleClose}
            id={state.trainee._id}
            firstname={state.trainee.firstname}
            lastname={state.trainee.lastname}
            email={state.trainee.email}
            batch={state.trainee.batch ? state.trainee.batch : ""}
          />
        </Modal.Body>
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
    delTrainee: (id) => dispatch(actionCreator.delTrainee(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllTrainees);
