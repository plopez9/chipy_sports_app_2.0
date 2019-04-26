import React, { Component } from "react";

import FirstPlot from "./Scatter_Chart"

class ScatterApp extends Component {
  render(){

    return(
      <div className="App">
        <div className="testdiv">
          <div className="card  card-tasks">
            <FirstPlot />
          </div>
        </div>
      </div>
    );
  }
}

export default ScatterApp
