import React, { Component } from "react";

class AddTrack extends Component {
  render() {
    return (
      <div className="row">
        <div>
          <form className="form">
            <div className="row mb-3">
              <div className="col">
                <label className="form-label">Track Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Track Title"
                />
              </div>
              <div className="col">
                <label className="form-label">Code</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Track Code"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddTrack;
