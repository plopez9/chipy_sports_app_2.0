import React, { Component } from "react";

import Sidenav from "./toolbar/sidenav.js";
import ToolBar from "./toolbar/toolbar";

class NFLApp extends Component {

  render(){

    return(
      <div className="App">
        <h1> This is the NFL App </h1>


        <div className="footer"> This is a footer </div>

      </div>
    );
  }
}

export default NFLApp
