import React, { Component } from "react";

import "./NFL-css/Matchup.css"

import Calculator from "./MatchupCalculator"
import FilterButton from "./TeamFilter"

import avatar from "./images/default-avatar.png";
import helmet from "./images/Generic-Helmet.png";


class MatchupCard extends Component{
  constructor(props){
    super(props);
    this.state = {
      team: "chi",
      defense:[],
    };
  }

  teamSelect(input){
    this.setState({
      team: input
    });
  }

  componentWillMount(){

    fetch("http://localhost:8000/NFL/DefensiveSummary/?format=json")
    .then(response => response.json())
    .then(json => {
      this.setState({
        defense: json,
      })
    });
  };

  render(){
    var pinfo = this.props.stats.filter((item) =>{
      return item.name === this.props.player
    })

    var oppTeam = this.state.defense.filter((item)=>{
      return (item.pos === pinfo.map(item => item.pos)[0]
      && item.oppt === this.state.team)
    })

    var teamList = [... new Set (this.state.defense.map(item=>
    item.oppt))];

      return(
        <div className="PlayerCard">
          <Calculator pinfo={pinfo} oppTeam={oppTeam}/>

          <div className="bottomHalf">

            <div className="playerStat">

              <img src={avatar} style={{
                height:"68%",
                marginBottom:"4px",
              }}/>

              <h5>{this.props.player}</h5>

              <div className="StatCard">
                <div className="column1">
                  <div>Pos: {pinfo.map(item => item.pos)}</div>
                  <div> GP: {pinfo.map(item => item.gp)}</div>
                </div>

                <div className="column2">
                  <div>Avg Pts: {pinfo.map(item => item.average_points_scored)}</div>
                  <div> Std: {pinfo.map(item=> item.std)}</div>
                </div>
              </div>
            </div>

            <div className="dStat">
              <img src={helmet} style={{
                marginTop:"15px",
                height:"60%",
                width:"98%",
                marginBottom:"9px",
              }}/>

              <div className="CardHeading" style={{
                display:"inline-block"
              }}>
                <h5>
                  <FilterButton
                  currentTeam = {this.state.team.toUpperCase()}
                  teams = {teamList}
                  select = {this.teamSelect.bind(this)}
                  />
                </h5>
              </div>

              <div className="StatCard">
                <div className="column1">
                  <div>Pos: Def</div>
                  <div> GP: {oppTeam.map(item => item.gp)}</div>
                </div>
                <div className="column2">
                <div>Pts Alwd: {oppTeam.map(item => item.points_allowed)}</div>
                <div> Std: {oppTeam.map(item=> item.std)}</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      );
    }
}


export default MatchupCard;
