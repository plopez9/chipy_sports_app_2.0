import React, { Component } from "react";

import "./NFL-Components/NFL-css/nfl.css";

import NflToolbar from "./NFL-Components/NflToolbar";


class NFLApp extends Component {

  render(){

    return(
      <div className="NFLApp">
        <NflToolbar/>
      </div>
    );
  }
}

export default NFLApp
