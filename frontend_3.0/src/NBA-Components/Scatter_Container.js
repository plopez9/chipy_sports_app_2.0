import React, { Component } from "react";

import SecondPlot from "./Scatter_Chart"

class ScatterApp extends Component {

  state={
    SummaryItems:[],
  };

  componentWillMount(){
    fetch("http://localhost:8000/nba_package/Summary/?format=json")
    .then(response => response.json())
    .then(json => {
      this.setState({
        SummaryItems: json,
      })
    });
  }

  render(){

    return(
      <div className="TopRow">
        <div className="testdiv">
          <div className="card  card-tasks" >
            <SecondPlot
            data={this.state.SummaryItems}
            player={this.props.player}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ScatterApp
