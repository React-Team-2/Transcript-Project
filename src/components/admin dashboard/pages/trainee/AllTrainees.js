import React, {useState } from "react";
import {connect} from "react-redux";
import {Button, Modal} from "react-bootstrap";
import axios from "axios";


const AllTrainees=(props)=>  {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
 
    const trainees = [
      { id: "1", fName: "Victor", lName: "Aremu", currentTrack:"Media & Design", date: "2021-05-28" },
      { id: "2", fName: "Agbesi", lName: "Amenyo", currentTrack:"Media & Design", date: "2021-05-28" },
      { id: "3", fName: "Felix", lName: "Portuphy", currentTrack:"Media & Design", date: "2021-05-28" },
      { id: "4", fName: "Bismark", lName: "Frimpong", currentTrack:"Media & Design", date: "2021-05-28" },
      { id: "5", fName: "Jefferson", lName: "Addai-Poku", currentTrack:"Salesforce Commerce Cloud Development", date: "2021-05-28" },
      { id: "6", fName: "Kwabena", lName: "Dwamena", currentTrack:"Salesforce Commerce Cloud Development", date: "2021-05-28" },
      { id: "7", fName: "Elliot", lName: "Adinortey", currentTrack:"Salesforce Commerce Cloud Development", date: "2021-05-28" },
      { id: "8", fName: "Amoro", lName: "Bagei", currentTrack:"Salesforce Commerce Cloud Development", date: "2021-05-28" }
     
    ];
    async function fetchTrainees() {
      const fetchedTrainees = await axios.get(
        "https://amalitech-tms.herokuapp.com/courses",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplZmYucG9ydHVwaHkyQGFtYWxpdGVjaC5vcmciLCJ1c2VyX2lkIjoiNjBiYTRlZjEzMDNlMGYxYjA0YjdhMjZjIiwiaWF0IjoxNjIyOTA4ODEwfQ.QBB21xZtGNRWW_1F6Vb0V47kPIRIRHgOsnktxSA_vT4",
          },
        }
      );
      const traineeData = fetchedTrainees.data.result;
          
      this.props.getTrainees(traineeData);
    }
  
    fetchTrainees();

    let traineeData = props.trainee;
    let fetched = props.loading;
    return (

        <div className="row mt-3">
          <div className="col-12">
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
                  <th>Current Track</th>
                  <th>Date Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              {trainees.map((trainee) => {
              return (
                <tr>
                  <td>{trainee.id}</td>
                  <td>{trainee.fName}</td>
                  <td>{trainee.lName}</td>
                  <td>{trainee.currentTrack}</td>
                  <td>{trainee.date}</td>
                  <td>
                  <i onClick={handleShow} className="cursor-pointer far fa-edit text-success" />
                  <i className="far fa-trash-alt text-danger ms-3" />
                  </td>
                </tr>
              );
            })}
              </tbody>
            </table>
          </div>
        </div>

    );
  }
    
const mapStateToProps = (state) => {
  return {
    loading: state.allTrainees.fetched,
    trainee: state.allTrainees.courses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTrainees: (trainees) => dispatch({ type: "UPDATE_TRAINEES", payload:trainees}),
  };
};


export default connect(mapStateToProps,mapDispatchToProps) (AllTrainees);
