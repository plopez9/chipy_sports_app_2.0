import React, { Component } from "react";
import Plot from "react-plotly.js";

class PlayerComparison extends Component{

  state = {
    player1:"Ryan, Matt",
    player2:"Watson, Deshaun",
    WeeklyStats: [],
  };

  componentWillMount(){

    fetch("http://localhost:8000/nfl_package/NFLStats/?format=json")
    .then(response => response.json())
    .then(json => {
      this.setState({
        WeeklyStats: json,
      })
    });
  };

  render(){
    var p1 = this.state.player1
    var p2 = this.state.player2

    var firstStat = this.state.WeeklyStats.filter(function(item){
      return item.name === p1
    });

    var secondStat = this.state.WeeklyStats.filter(function(item){
      return item.name === p2
    });

    return(
      <Plot
        data = {[
          {
            x:firstStat.map(item => item.week),
            y:firstStat.map(item => item.yh_points),
            type: "line",
            mode: "lines+markers",
            marker: {color:"Blue"},
            hoverinfo: "y",
            name: p1,
          },

          {
            x:secondStat.map(item => item.week),
            y:secondStat.map(item => item.yh_points),
            type: "line",
            mode: "lines+markers",
            marker: {color:"Red"},
            hoverinfo: "y",
            name: p2,
          },
        ]}

        layout ={{
          autosize: true,
          yaxis:{
            title: "Fantasy Points Scored"
          },
          xaxis:{
            title: "Scheduled Week"
          }
        }}
      />
    );
  }
}

export default PlayerComparison;
