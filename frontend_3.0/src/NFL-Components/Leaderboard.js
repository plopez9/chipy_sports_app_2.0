import React, { Component } from "react";

import "./NFL-css/Leaderboard.css"

class LeaderTable extends Component{
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

  TableBody(){
    return this.state.YearlyStats.map((player, index) =>{
      const{name, pos, year, gp, average_points_scored, std, average_points_allowed, defense_std} = player
      return(
        <tr key={name}>
          <td style={{
            width:"16%",
          }}>{name}</td>
          <td style={{
            width:"11%",
          }}>{pos}</td>
          <td style={{
            width:"11.5%",
          }}>{year}</td>
          <td style={{
            width:"11.5%",
          }}>{gp}</td>
          <td style={{
            width:"13.5%",
          }}>{average_points_scored}</td>
          <td style={{
            width:"11.5%",
          }}>{std}</td>
          <td style={{
            width:"13.5%",
          }}>{average_points_allowed}</td>
          <td style={{
            width:"11.5%",
          }}>{defense_std}</td>
        </tr>
      )
    })
  }

  render(){

    function compare (a,b){
      return b.average_points_scored - a.average_points_scored
    }

    this.state.YearlyStats.sort(compare)

      return(

          <div className="DisplayTable">
            <div className="RadioDiv">All QB RB WR TE Def </div>

            <thead className="Table-Header">
              <tr>
              <th> Player</th>
              <th> Pos </th>
              <th> Year </th>
              <th> GP </th>
              <th> Average Points Scored </th>
              <th> STD </th>
              <th> Average Points Allowed </th>
              <th> STD </th>
              </tr>
            </thead>
            <tbody>
              {this.TableBody()}
            </tbody>
          </div>
      );
    }
}


export default LeaderTable;
