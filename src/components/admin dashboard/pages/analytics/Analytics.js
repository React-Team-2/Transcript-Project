import React, { Component } from 'react';
import "./Analytics.css";
// import Chart from "../../charts/Chart";

class Analytics extends Component {
    render() {
        return (
            <div>
                 <div className="main__container">
     
        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__anCards">
          <div className="anCard">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="anCard_inner">
              <p className="text-primary-p">Total Number of Trainees</p>
              <span className="font-bold text-title">578</span>
            </div>
          </div>

          <div className="anCard">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="anCard_inner">
              <p className="text-primary-p">Courses Available</p>
              <span className="font-bold text-title">2467</span>
            </div>
          </div>

          <div className="anCard">
            <i
              className="fa fa-video-camera fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="anCard_inner">
              <p className="text-primary-p">Courses Enrolled</p>
              <span className="font-bold text-title">340</span>
            </div>
          </div>

          <div className="anCard">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="anCard_inner">
              <p className="text-primary-p">Number</p>
              <span className="font-bold text-title">645</span>
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
                <p>20%</p>
              </div>

              <div className="anCard2">
                <h1>Feb</h1>
                <p>50%</p>
              </div>

              <div className="anCard3">
                <h1>Users</h1>
                <p>3900</p>
              </div>

              <div className="anCard4">
                <h1>March</h1>
                <p>90%</p>
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
        <div>

        </div>
      </div>
            </div>
        );
    }
}

export default Analytics;