import React, { Component } from "react";

import MatchupCard from "./MatchupCard"

class Matchup extends Component{
  state ={
    YearlyStats: [],
  };

  componentWillMount(){

    fetch("http://localhost:8000/nfl_package/NFLSummary/?format=json")
    .then(response => response.json())
    .then(json => {
      this.setState({
        YearlyStats: json,
      })
    });
  };

  render(){


      return(
        <div className="displayCard" style={{
          height: "420px",
          width:"100%",
          display:"flex",
          justifyContent:"space-around",
        }}>
          <MatchupCard player = {this.props.player1}
          stats={this.state.YearlyStats}/>
          <MatchupCard player= {this.props.player2}
          stats={this.state.YearlyStats}/>
        </div>

      );
    }
}


export default Matchup;
