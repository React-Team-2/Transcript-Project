import React, { Component } from "react";

class AllTracks extends Component {
  render() {
    this.tracks = [
      { id: "1", title: "Media & Design", code: "MD012", date: "2021-05-28" },
      {
        id: "2",
        title: "Software Development & Evolution",
        code: "SDE013",
        date: "2021-05-28",
      },
      {
        id: "3",
        title: "Machine Learning & Data Analytics",
        code: "MLD012",
        date: "2021-05-28",
      },
      {
        id: "4",
        title: "Salesforce Commerce Cloud Development",
        code: "SCC017",
        date: "2021-05-28",
      },
    ];
    return (
      <div className="row mt-3">
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
              <th>Track Code</th>
              <th>Date Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.tracks.map((track) => {
              return (
                <tr>
                  <td>{track.id}</td>
                  <td>{track.title}</td>
                  <td>{track.code}</td>
                  <td>{track.date}</td>
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
    );
  }
}

export default AllTracks;
