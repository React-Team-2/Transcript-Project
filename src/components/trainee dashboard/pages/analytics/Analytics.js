import React, { Component } from 'react';
import Chart from "../../charts/Chart"
import "./Analytics.css";

class Analytics extends Component {
    render() {
        return (
        <div>
                 <div className="main__container">
            {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <img src='/assets/hello.svg' alt="hello" />
          <div className="main__greeting">
            <h1>Hello Trainee</h1>
            <p>Welcome to your dashboard</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__anCards">
          <div className="anCard">
          
            <div className="anCard_inner">
              <p className="text-primary-p">Enrolled Courses</p>
              <span className="font-bold text-title">1</span>
            </div>
          </div>

          <div className="anCard">
           
            <div className="anCard_inner">
              <p className="text-primary-p">Courses Available</p>
              <span className="font-bold text-title">1</span>
            </div>
          </div>

          <div className="anCard">
           
            <div className="anCard_inner">
              <p className="text-primary-p">Completed Courses</p>
              <span className="font-bold text-title">1</span>
            </div>
          </div>

          <div className="anCard">
           
            <div className="anCard_inner">
              <p className="text-primary-p">Number</p>
              <span className="font-bold text-title">1</span>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        
      </div>
    </div>
        );
    }
}

export default Analytics;