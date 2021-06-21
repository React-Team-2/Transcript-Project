import React, { Component } from "react";
import Chart from "../../charts/Chart";
import "./Analytics.css";
import {connect} from "react-redux";
import * as actionCreator from "../../../../store/actions/action";
// import Chart from "../../charts/Chart";

class Analytics extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchTrainees()
    this.props.fetchTracks()
    this.props.fetchCourses()
  }
  render() {
    return (
      <div>
        <div className="main__container">
          {/* <!-- MAIN CARDS STARTS HERE --> */}
          <div className="main__anCards">
            <div className="green anCard1">
             
              <div className="anCard_inner">
                <p className="text-primary-p">Total Number of Trainees</p>
                <span className="font-bold text-title">{this.props.trainees.length}</span>
              </div>
            </div>

            <div className="anCard2">
             
              <div className="anCard_inner">
                <p className="text-primary-p">Courses Available</p>
                <span className="font-bold text-title">{this.props.courses.length}</span>
              </div>
            </div>

            {/* <div className="anCard3">
             
              <div className="anCard_inner">
                <p className="text-primary-p">Batches</p>
                <span className="font-bold text-title">{3}</span>
              </div>
            </div> */}

            <div className="anCard4">
            
              <div className="anCard_inner">
                <p className="text-primary-p">Tracks</p>
                <span className="font-bold text-title">{this.props.tracks.length}</span>
              </div>
            </div>
          </div>
          {/* <!-- MAIN CARDS ENDS HERE --> */}

          {/* <!-- CHARTS STARTS HERE --> */}
          <div className="charts">
            <div className="charts__right">
              <div className="charts__right__title">
                <div>
                  <h1>Progress Report</h1>
                  <p>Overview</p>
                </div>
                <i className="fa fa-usd" aria-hidden="true"></i>
              </div>

              <div className="charts__right__anCards">
                <div className="anCard1">
                  <h1>Jan</h1>
                  {/* <p>20%</p> */}
                </div>

                <div className="anCard2">
                  <h1>Feb</h1>
                  {/* <p>50%</p> */}
                </div>

                <div className="anCard3">
                  <h1>Users</h1>
                  {/* <p>3900</p> */}
                </div>

                <div className="anCard4">
                  <h1>March</h1>
                  {/* <p>90%</p> */}
                </div>
              </div>
            </div>
            <div className="charts__left">
              <div className="charts__left__title">
                <div>
                  <h1>Daily Reports</h1>
                  <p>Overview</p>
                </div>
                <i className="fa fa-usd" aria-hidden="true"></i>
              </div>
              {/* <Chart /> */}
            </div>
          </div>
          {/* <!-- CHARTS ENDS HERE --> */}
        
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    trainees: state.allTrainees.trainees,
    courses: state.allCourses.courses,
    tracks: state.allTraineeTracks.tracks,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrainees: () => dispatch(actionCreator.fetchTrainees()),
    fetchTracks: () => dispatch(actionCreator.fetchTracks()),
    fetchCourses: () => dispatch(actionCreator.fetchCourses())
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Analytics);


