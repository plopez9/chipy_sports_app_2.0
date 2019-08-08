import React, { Component } from "react";

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
            width:"15%",
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
            width:"12.5%",
          }}>{defense_std}</td>
        </tr>
      )
    })
  }

  render(){
      return(
        <div className="Display Card" style={{
          width: "100%",
          height: "450px",
          backgroundColor: "coral",
          marginTop: "5%",
          marginBottom: "5%",
          alignContent:"center",
        }}>
          <div className="Display Table" style={{
            position:"relative",
            top: "5%",
            left:"17%",
            borderStyle:"ridge",
            overflow: "auto",
            height: "400px",
            width:"840px",
            backgroundColor:"white",
          }}>
            <thead className="Table-Header" style={{
              backgroundColor:"#F0F8FF",
            }}>
              <tr>
              <th> Player </th>
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
        </div>
      );
    }
}


export default LeaderTable;
