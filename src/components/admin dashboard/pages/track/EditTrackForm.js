import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as actionCreator from "../../../../store/actions/action";

class EditTrackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      track_name: this.props.track_name,
      track_master: this.props.track_master,
      tracks: [],
    };
  }

  handleValueChange = (e) => {
    const fieldName = e.target.name;
    switch (fieldName) {
      case "track_name":
        this.setState({ track_name: e.target.value });
        break;
      case "track_master":
        this.setState({ track_master: e.target.value });
        break;
    }
  };

  handleSave = (e) => {
    e.preventDefault();
    let newTrack = {
      id: this.state.id,
      track_name: this.state.track_name,
      track_master: this.state.track_master,
    };
    let trackObj = [...this.state.tracks, newTrack];
    this.setState({ tracks: trackObj }, () => {
      this.setState({
        track_name: " ",
        track_master: " ",
      });
    });
    this.props.updateTrack(newTrack);
    // setTimeout(() => {window.location.reload();}, 1000);
  };

  render() {
    return (
      <form className="form">
        <Row className="mb-3">
          <Col>
            <div>
              <label className="form-label">Track Title</label>
              <input
                name="track_name"
                className="form-control"
                type="text"
                defaultValue={this.props.track_name}
                onChange={this.handleValueChange}
              />
            </div>
          </Col>
          <Col>
            <div>
              <label className="form-label">Track Master</label>
              <input
                name="track_master"
                className="form-control"
                type="text"
                defaultValue={this.props.track_master}
                onChange={this.handleValueChange}
                placeholder=""
              />
            </div>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <div>
              <label className="form-label">Date Created</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter email"
                onChange={this.handleValueChange}
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Button onClick={this.props.closeButton}>Close</Button>
          </Col>
          <Col>
            <Button
              type="submit"
              className=" btn btn-success"
              onClick={this.handleSave}
            >
              Save Changes
            </Button>
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
  updateTrack: (track) => dispatch(actionCreator.updateTrack(track)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTrackForm);
