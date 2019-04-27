import React, { Component } from "react";

import "./components/bootstrap.min.css";
import "./App.css";

import ScatterApp from "./components/Scatter_Container";
import PlayerApp from "./components/Player_Container";
import FirstPlot from "./components/Bar_Chart";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      stats: [],
    };
  }

  componentDidMount(){

    fetch("http://localhost:8000/nba_package/jsonSummary/?format=json&player=Stephen%20Curry")
    .then(response => response.json())
    .then(json => {
      this.setState({
        stats: json,
      })
    });

  }

  render(){
    return(
      <div className="App">

        <div className="main_panel">
          <div className="row">
            <div className="col-md-6">
              <PlayerApp />
            </div>
          </div>

      </div>

    </div>
    );
  }
}

export default App
