import React, { Component } from "react";

class AllTrainees extends Component {
  render() {
    this.trainees = [
      { id: "1", fName: "Victor", lName: "Aremu", currentTrack:"Media & Design", date: "2021-05-28" },
      { id: "2", fName: "Agbesi", lName: "Amenyo", currentTrack:"Media & Design", date: "2021-05-28" },
      { id: "3", fName: "Felix", lName: "Portuphy", currentTrack:"Media & Design", date: "2021-05-28" },
      { id: "4", fName: "Bismark", lName: "Frimpong", currentTrack:"Media & Design", date: "2021-05-28" },
      { id: "5", fName: "Jefferson", lName: "Addai-Poku", currentTrack:"Salesforce Commerce Cloud Development", date: "2021-05-28" },
      { id: "6", fName: "Kwabena", lName: "Dwamena", currentTrack:"Salesforce Commerce Cloud Development", date: "2021-05-28" },
      { id: "7", fName: "Elliot", lName: "Adinortey", currentTrack:"Salesforce Commerce Cloud Development", date: "2021-05-28" },
      { id: "8", fName: "Amoro", lName: "Bagei", currentTrack:"Salesforce Commerce Cloud Development", date: "2021-05-28" }
     
    ];
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
              {this.trainees.map((trainee, index) => {
              return (
                <tr>
                  <td>{trainee.id}</td>
                  <td>{trainee.fName}</td>
                  <td>{trainee.lName}</td>
                  <td>{trainee.currentTrack}</td>
                  <td>{trainee.date}</td>
                  <td>
                    <a href="#" className="far fa-edit text-success" />
                    <a href="#" className="far fa-trash-alt text-danger ms-3" />
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
}

export default AllTrainees;
