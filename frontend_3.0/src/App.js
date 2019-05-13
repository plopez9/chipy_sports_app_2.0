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
    let backdrop;

    if (this.state.SNOpen){
      backdrop = <Backdrop BDClick={this.CloseClickHandler}/>
    }

    return(
      <div className="App">
        <Sidenav show={this.state.SNOpen} SNClick={this.CloseClickHandler}/>
        <ToolBar sideClickHandler={this.SNTClickHandler}/>

        <div className="Row">
          <ScatterApp/>
        </div>

        {backdrop}
      </div>
    );
  }
}

export default App
