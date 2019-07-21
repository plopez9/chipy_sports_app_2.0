import React, { Component } from "react";

import "./NFL-Components/nfl.css";

class NFLApp extends Component {

  render(){

    return(
      <div className="NFLApp" style={{
        backgroundColor:"blue"
      }}>
        <div className="content">
          <div className="text">
            <h4> New NFL Page Coming Soon! </h4>
            <p> Thank You For Your Patience </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NFLApp
