import React, { Component } from "react";

import "./App.css";

import ToggleButton from "./components/toolbar/toggle-button";
import Sidenav from "./components/toolbar/sidenav.js";
import Backdrop from "./components/Backdrop.js";
import ToolBar from "./components/toolbar/toolbar";

class App extends Component {


  render(){
    return(
      <div className="App">
        <Sidenav/>
        <ToolBar/>
        <Backdrop/>
      </div>
    );
  }
}

export default App
