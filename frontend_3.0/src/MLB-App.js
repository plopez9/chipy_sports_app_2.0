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
        <div className="content">
          <div className="text">
            <h4> New MLB Page Coming Soon! </h4>
            <p> Thank You For Your Patience </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MLBApp
