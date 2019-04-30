import React, { Component } from "react";

import "./components/bootstrap.min.css";
import "./App.css";

import ScatterApp from "./components/Scatter_Container";
import PlayerApp from "./components/Player_Container";
import FirstPlot from "./components/Bar_Chart";

class App extends Component {


  render(){
    return(
      <div className="App">

        <div className="main_panel">
            <div className="row">
              <div className="Top">
                <ScatterApp/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <PlayerApp />
              </div>
              <div className="col-md-6">
                <FirstPlot/>
              </div>
            </div>
        </div>

      </div>
    );
  }
}

export default App
