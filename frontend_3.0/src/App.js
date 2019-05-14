import React, { Component } from "react";

import "./App.css";

import Sidenav from "./toolbar/sidenav.js";
import ToolBar from "./toolbar/toolbar";

import ScatterApp from "./NBA-Components/Scatter_Container";
import FirstPlot from "./NBA-Components/Bar_Chart";
import PlayerApp from "./NBA-Components/Player_Container";

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

        <div className="footer"> This is a footer </div>

      </div>
    );
  }
}

export default App
