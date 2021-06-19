import React, { Component } from "react";
import {Row,Col} from "react-bootstrap";
import * as actionCreator from "../../../../store/actions/action";
import {connect} from 'react-redux'

class AddTrack extends Component {
  render() {
   
    return (
      <form className="form">
        <Row className="mb-3">
          <Col>
           
              <label className="form-label">Track Name</label>
              <input
              value={this.props.trackName}
                className="form-control"
                type="text"
                placeholder="Track Title"
              />
           
          </Col>
          <Col>
            
              <label className="form-label">Track Master</label>
              <input
               value={this.props.trackMaster}
                className="form-control"
                type="text"
                placeholder="Track Master"
              />
            
          </Col>
        </Row>

      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.allTraineeTracks.fetched,
    tracks: state.allTraineeTracks.tracks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTracks: (track) => dispatch(actionCreator.addTracks(track))
  };
};
export default connect(mapStateToProps,mapDispatchToProps) (AddTrack);

