import React, { Component } from "react";
import {Row,Col, Button} from "react-bootstrap";
import * as actionCreator from "../../../../store/actions/action";
import {connect} from 'react-redux'

class AddTrack extends Component {
  constructor(props) {
    super(props);
    this.state = {
        track_name: " ",
        track_master: " ",
        tracks:[],
      }
    
      
  }
  
   handleValueChange=(e)=>{
     const fieldName=e.target.name;
     switch(fieldName){
       case "track_name":
         this.setState({track_name:e.target.value})
         break;
       case "track_master":
          this.setState({track_master:e.target.value})
          break;
          
     }
   }


   handleSave=(e)=>{
      e.preventDefault()
      let newTrack={
        track_name:this.state.track_name,
        track_master:this.state.track_master,
      
      }
      let trackObj=[...this.state.tracks, newTrack]
      this.setState({tracks:trackObj},()=>{
        this.setState({
          track_name: " ",
          track_master: " ",

        })
      })
      this.props.addTracks(newTrack)
      setTimeout(()=>{window.location.reload()}, 1000)
   }
  
  render() {
   
    return (
      <form className="form">
        <Row className="mb-3">
          <Col>
           
              <label className="form-label">Track Name</label>
              <input
              name="track_name"
              defaultValue={this.props.trackName}
                className="form-control"
                type="text"
                placeholder="Track Title"
                onChange = {this.handleValueChange}
              />
           
          </Col>
          <Col>
            
              <label className="form-label">Track Master</label>
              <input
                name="track_master"
               defaultValue={this.props.trackMaster}
                className="form-control"
                type="text"
                placeholder="Track Master"
                onChange = {this.handleValueChange}
              />
            
          </Col>
        </Row>

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

