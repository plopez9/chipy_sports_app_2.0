import React, { Component } from "react";

import Sidenav from "./toolbar/sidenav.js";
import ToolBar from "./toolbar/toolbar";

class NFLApp extends Component {

  state = {
    SNOpen: false
  };

  SNTClickHandler =() => {
    this.setState((prevState) => {
      return {SNOpen: !prevState.SNOpen};
    });
  };

  CloseClickHandler = () =>{
    this.setState({SNOpen: false})
  }


  render(){

    return(
      <div className="App">
        <Sidenav show={this.state.SNOpen} SNClick={this.CloseClickHandler}/>
        <ToolBar sideClickHandler={this.SNTClickHandler}/>


        <div className="footer"> This is a footer </div>

      </div>
    );
  }
}

export default NFLApp
