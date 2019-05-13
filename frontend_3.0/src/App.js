import React, { Component } from "react";

import "./App.css";

import Sidenav from "./components/toolbar/sidenav.js";
import Backdrop from "./components/Backdrop.js";
import ToolBar from "./components/toolbar/toolbar";

class App extends Component {

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
    console.log(this.state.SNOpen)

    let backdrop;

    if (this.state.SNOpen){
      backdrop = <Backdrop BDClick={this.CloseClickHandler}/>
    }

    return(
      <div className="App">
        <Sidenav close= {this.CloseClickHandler} show={this.state.SNOpen}/>
        <ToolBar sideClickHandler={this.SNTClickHandler}/>
        {backdrop}
      </div>
    );
  }
}

export default App
