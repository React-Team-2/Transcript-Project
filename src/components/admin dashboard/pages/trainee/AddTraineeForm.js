import React, { Component } from "react";
import { Row, Col,Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as actionCreator from "../../../../store/actions/action";

class AddTrainee extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstname: " ",
        lastname: " ",
        email: " ",
        batch_name: " ",
        password: " ",
        role_title: " ",
        trainees:[],
      }
    
      
  }


  
   handleValueChange=(e)=>{
     const fieldName=e.target.name;
     switch(fieldName){
       case "firstname":
         this.setState({firstname:e.target.value})
         break;
       case "lastname":
          this.setState({lastname:e.target.value})
          break;
       case "email":
          this.setState({email:e.target.value})
          break;
        case "batch_name":
          this.setState({batch_name:e.target.value})
          break;
          case "password":
            this.setState({password:e.target.value})
            break;
            
     }
   }


   handleSave=(e)=>{
      e.preventDefault()
      let newTrainee={
        firstname:this.state.firstname,
        lastname:this.state.lastname,
        email:this.state.email,
        batch_name:this.state.batch_name,
        password: this.state.password,
        role: "user",
      
      }
      let traineeObj=[...this.state.trainees,newTrainee]
      this.setState({trainees:traineeObj},()=>{
        // console.log("New Trainee: ",...this.state.trainees)
        this.setState({
          firstname: " ",
          lastname: " ",
          email: " ",
          batch_name: " ",
          password: " ",

        })
      })
      this.props.addTrainee(newTrainee)
      
   }
  

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
                name="firstname"
                defaultValue={this.props.firstname}
                onChange={this.handleValueChange}
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
                name="lastname"
                defaultValue={this.props.lastname}
                onChange={this.handleValueChange}
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
                name="email"
                defaultValue={this.props.email}
                onChange={this.handleValueChange}
                placeholder="Enter email"
              />
            </div>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <div>
              <label className="form-label">Batch Name</label>
              <input
                className="form-control"
                type="text"
                name="batch_name"
                defaultValue= {this.props.batch_name}
                onChange={this.handleValueChange}
                placeholder="Enter Batch Name"
              />
            </div>
          </Col>
          <Col>
            <div>
              <label className="form-label">Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleValueChange}
                placeholder="Enter Password"
              />
            </div>
          </Col>
        </Row>
        {/* <Row className="mb-3">
          <Col>
            <label className="form-label">Track</label>
            <select className="form-control" >
              {this.props.tracks.map((track) => {
                return <option>{track.track_name}</option>;
              })}
            </select>
          </Col>
        </Row> */}
        <Row className="mb-3">
          <Col><Button onClick={this.props.closeButton}>Close</Button></Col>
          <Col>
          <Button type="submit" className=" btn btn-success" onClick={this.handleSave}>
            Add
          </Button>
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
