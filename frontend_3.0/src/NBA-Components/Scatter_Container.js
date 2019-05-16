import React, { Component } from "react";

import SecondPlot from "./Scatter_Chart"

class ScatterApp extends Component {
  render(){

    return(
      <div className="App">
        <div className="testdiv">
          <div className="card  card-tasks">
            <SecondPlot data={this.props.data} player={this.props.player}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ScatterApp
