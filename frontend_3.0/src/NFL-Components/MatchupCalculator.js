import React, { Component } from "react";

class Calculator extends Component{
  constructor(props){
    super(props);
  }

  render(){

    let score1 = this.props.pinfo.map(item => item.average_points_scored)
    let std1 = this.props.pinfo.map(item=> item.std)

    let score2 = this.props.oppTeam.map(item => item.points_allowed)
    let std2 = this.props.oppTeam.map(item=> item.std)
    let delta = Math.max(score1, score2)-Math.min(score1,score2)
    var ratio = 1

    if (score1 > score2){
      var ratio = std2/std1
    } else{
      var ratio = std1/std2
    }


      return(
        <div className="topHalf">
          <h1> Matchup Rating </h1>

          <h2> {(Math.min(score1, score2) + delta * (1/(1+Math.exp(-4*(ratio-1))))).toFixed(2)}
          </h2>
        </div>
      );
    }
}


export default Calculator;
