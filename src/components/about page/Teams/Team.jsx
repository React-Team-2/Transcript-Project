import React, { Component } from 'react';
import Developer from './Developer';
import './team.css';
import {connect} from 'react-redux'

class Team extends Component {
   
     
      render() {
        return (
          <div className="container">
            <h1 className="title"> TEAM </h1>
            <div className="team">
              {this.props.developer.map(function (dev, index) {
                return (
                  <Developer
                    key={index}
                    fullName={dev.fName + " " + dev.lName}
                    position={dev.position}
                    src={dev.src}
                    alt={dev.alt}
                  />
                );
              })}
            </div>
          </div>
        );
      }
    }
    const mapStateToProps = state => {
      return {
          developer: state.as.developer
      }
  }


    export default connect(mapStateToProps)(Team);