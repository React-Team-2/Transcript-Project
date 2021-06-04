import React, { Component } from "react";

class AddTrainee extends Component {
  render() {
    return (
      <div className="row">
        


          <form className="form">
            <div className="row mb-3">
              <div className="col">
                <label className="form-label">Firstname</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter FirstName"
                />
              </div>
              <div className="col">
                <label className="form-label">Lastname</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Lastname"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label className="form-label">Email</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter email"
                />
              </div>
              <div className="col">
                <label className="form-label">Track</label>
                <select className="form-select">
                  <option>Foundation</option>
                  <option>Media & Design</option>
                  <option>Software Development & Evolution</option>
                  <option>Machine Learning & Data Analytics</option>
                  <option>Salesforce Commerce Cloud Development</option>
                </select>
              </div>
            </div>
            
          </form>
        
      </div>
    );
  }
}

export default AddTrainee;
