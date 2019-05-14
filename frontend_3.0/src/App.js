import React, { Component } from "react";

import "./App.css";

import Sidenav from "./toolbar/sidenav.js";
import ToolBar from "./toolbar/toolbar";

import ScatterApp from "./NBA-Components/Scatter_Container";
import FirstPlot from "./NBA-Components/Bar_Chart";
import PlayerApp from "./NBA-Components/Player_Container";

class NBAApp extends Component {

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

        <div className="TopRow">
          <ScatterApp/>
        </div>

        <div className="Row">
          <div className="Player-data">
            <PlayerApp/>
          </div>
          <div className="Contract-data">
            <FirstPlot/>
          </div>
        </div>

        <div className="footer">
          <div className="footer1"> Footer 1 </div>
          <div className="footer2"> Footer 2 </div>
          <div className="footer3"> Footer 3 </div>
        </div>

      </div>
    );
  }
}

export default NBAApp
