import React, { Component } from 'react';
import AddTrack from './AddTrackForm';
import AllTracks from './AllTracks';

class Track extends Component {
    render() {
        return (
            <div className="container p-5">
            <div className="row mb-3">
              <div className="col-3">
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#addtrack"
                >
                 Create Track
                </button>
              </div>
            </div>
    
            <div className="row">
              <AllTracks/>
              <div
                className="modal fade"
                id="addtrack"
                tabIndex={-1}
                aria-labelledby="addTrackLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <i className="fas fa-plus" />
                      <h5 className="modal-title" id="addTrackLabel">
                        Add New Track
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <AddTrack />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-success">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Track;