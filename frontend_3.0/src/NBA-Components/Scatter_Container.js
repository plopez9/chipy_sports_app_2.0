import React, { Component } from "react";

import SecondPlot from "./Scatter_Chart"

class ScatterApp extends Component {
  render(){

    console.log(this.props.data)

    return(
      <div className="App">
        <div className="testdiv">
          <div className="card  card-tasks">
            <SecondPlot/>
          </div>
        </div>
      </div>
    );
  }
}

export default ScatterApp
