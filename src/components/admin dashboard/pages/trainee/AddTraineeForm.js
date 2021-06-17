import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import * as actionCreator from "../../../../store/actions/action";

class AddTrainee extends Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        firstname: " ",
        lastname: " ",
        batch_name: " ",
        password: " ",
        role_title: " ",
        email: " ",
      },
    ];
  }

  setFirstName = (e) => {
    this.setState({firstname:(e.target.value)})
  };
  setLastName = (e) => {
    this.setState({lastname:(e.target.value)})
  };
  setEmail = (e) => {
    this.setState({email:(e.target.value)})
   
  };
  setBatch = (e) => {
    this.setState({batch_name:(e.target.value)})
    
  };
  setPassword = (e) => {
    this.setState({password:(e.target.value)})
  };

  

  render() {
    return (
      <form className="form">
        <Row className="mb-3">
          <Col>
            <div>
              <label className="form-label">Firstname</label>
              <input
                className="form-control"
                type="text"
                value={this.props.firstName}
                onChange={this.setFirstName}
                placeholder="Enter FirstName"
              />
            </div>
          </Col>
          <Col>
            <div>
              <label className="form-label">Lastname</label>
              <input
                className="form-control"
                type="text"
                value={this.props.lastName}
                onChange={this.setLastName}
                placeholder="Enter Lastname"
              />
            </div>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col className="">
            <div>
              <label className="form-label">Email</label>
              <input
                className="form-control"
                type="email"
                value={this.props.email}
                onChange={this.setEmail}
                placeholder="Enter email"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <label className="form-label">Track</label>
            <select className="form-control" onChange={(e) => e.target.value}>
              {/* <option>Foundation</option>
                <option>Media & Design</option>
                <option>Software Development & Evolution</option>
                <option>Machine Learning & Data Analytics</option>
                <option>Salesforce Commerce Cloud Development</option> */}
              {this.props.tracks.map((track) => {
                return <option>{track.track_name}</option>;
              })}
            </select>
          </Col>
        </Row>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    trainee: state.allTrainees.trainees,
    tracks: state.allTraineeTracks.tracks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTrainee: (trainee) => dispatch(actionCreator.addTrainee(trainee)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTrainee);
