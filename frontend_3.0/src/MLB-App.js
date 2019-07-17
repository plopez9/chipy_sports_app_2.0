import React, { Component } from "react";

import "./MLB-Components/mlb.css";

class MLBApp extends Component {

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
      <div className="MLBApp">
        <h1> This is the MLB App </h1>


        <div className="footer"> This is a footer </div>
      </div>
    );
  }
}

export default MLBApp
