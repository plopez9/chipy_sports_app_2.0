import React, { Component } from "react";

import "./NFL-css/Matchup.css"

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

  componentWillMount(){

    fetch("http://localhost:8000/nfl_package/DefensiveSummary/?format=json")
    .then(response => response.json())
    .then(json => {
      this.setState({
        defense: json,
      })
    });
  };


  render(){
    var player =this.props.player
    var data = this.props.stats
    var team = this.state.team
    var pinfo = data.filter(function(item){
      return item.name === player
    });
    var dinfo = data.filter(function(item){
      return item.name === "Chicago"
    });

    var strPos = pinfo.map(item => item.pos)[0]


    var oppTeam = this.state.defense.filter((item)=>{
      return item.pos === strPos && item.oppt === this.state.team
    });

    console.log(oppTeam)

      return(
        <div className="PlayerCard">
          <div className="topHalf">
            <h1> Matchup Rating </h1>
            <h2> 21.9 </h2>
          </div>

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
              <h5>{dinfo.map(item => item.name)}</h5>
              <div className="StatCard">
                <div className="column1">
                  <div>Pos: {dinfo.map(item => item.pos)}</div>
                  <div> GP: {dinfo.map(item => item.gp)}</div>
                </div>
                <div className="column2">
                <div>Pts Alwd: {dinfo.map(item => item.average_points_scored)}</div>
                <div> Std: {dinfo.map(item=> item.std)}</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      );
    }
}


export default MatchupCard;
