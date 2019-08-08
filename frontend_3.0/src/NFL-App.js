import React, { Component } from "react";

import "./NFL-Components/nfl.css";

import LeaderTable from "./NFL-Components/Leaderboard";

class NFLApp extends Component {

  state ={
    YearlyStats: [],
    WeeklyStats: [],
  };

  componentWillMount(){

    fetch("http://localhost:8000/nfl_package/NFLSummary/?format=json")
    .then(response => response.json())
    .then(json => {
      this.setState({
        YearlyStats: json,
      })
    });

    fetch("http://localhost:8000/nfl_package/NFLStats/?format=json")
    .then(response => response.json())
    .then(json => {
      this.setState({
        WeeklyStats: json,
      })
    });
  };

  render(){

    return(
      <div className="NFLApp">
        <div className="content">
          <div className="text">
            <h4> New NFL Page Coming Soon! </h4>
            <p> Thank You For Your Patience </p>
          </div>
        </div>
        <LeaderTable YearlyStats={this.state.YearlyStats}/>
      </div>
    );
  }
}

export default NFLApp
