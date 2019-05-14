import React, { Component } from "react";

import "./App.css";

import Sidenav from "./components/toolbar/sidenav.js";
import Backdrop from "./components/Backdrop.js";
import ToolBar from "./components/toolbar/toolbar";

import ScatterApp from "./components/Scatter_Container";
import FirstPlot from "./components/Bar_Chart";
import PlayerApp from "./components/Player_Container";

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
