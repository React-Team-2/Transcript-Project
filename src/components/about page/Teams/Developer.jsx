import React from "react";

const Developer = (props) => {
  return (
    <div className="developer">
      <div className="overlay">
        Media and Design Track, in charge of About Page
       </div>
      <div className="devImg">
         <img src={props.src} alt={props.alt} />
      </div>
      <div className="devInfo">
        <p className="fullName"> {props.fullName} </p>
        <p className="position"> {props.position} </p>
      </div>
    </div>
  );
};
export default Developer;
