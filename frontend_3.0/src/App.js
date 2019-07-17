import React, { Component } from "react";

import "./App.css";

import Sidenav from "./toolbar/sidenav.js";
import ToolBar from "./toolbar/toolbar";
import ToggleButton from "./toolbar/open-button"

class App extends Component {

  state = {
    SNOpen: false,

  };

  SNTClickHandler =() => {
    this.setState((prevState) => {
      return {SNOpen: !prevState.SNOpen};
    });
  };

  CloseClickHandler = () =>{
    this.setState({SNOpen: false})
  };



  render(){

    return(
      <div className="App">
        <div className="Slider">
          <ToggleButton sideClickHandler={this.SNTClickHandler}/>
        </div>
        <Sidenav show={this.state.SNOpen} SNClick={this.CloseClickHandler}/>
      </div>
    );
  }
}

export default App
