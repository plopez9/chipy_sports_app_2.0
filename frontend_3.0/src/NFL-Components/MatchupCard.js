import React, { Component } from "react";
import avatar from "./images/default-avatar.png";
import helmet from "./images/Generic-Helmet.png";

class MatchupCard extends Component{

  render(){
    var player =this.props.player
    var data = this.props.stats

    var pinfo = data.filter(function(item){
      return item.name === player
    });

    var dinfo = data.filter(function(item){
      return item.name === "Chicago"
    });

    console.log(dinfo)

      return(
        <div className="PlayerCard" style={{
          backgroundColor:"white",
          width: "512px",
          height: "100%",
          display:"inline-block",
          borderStyle:"ridge",
          backgroundColor: "#F2F3F4",
          opacity:"0.94",
        }}>
          <div className="topHalf" style={{
            marginTop:"30px",
            height: "28%",
          }}>
            <h1> Matchup Rating </h1>
            <h2> 21.9 </h2>
          </div>

          <div className="bottomHalf" style={{
            height:"62%",
            display:"flex",
            justifyContent:"space-evenly",
          }}>
            <div className="playerStat" style={{
              width: "45%",
              borderStyle:"outset",
              backgroundColor:"white",
              }}>
              <img src={avatar} style={{
                height:"68%",
                marginBottom:"4px",
              }}/>
              <h5>{this.props.player}</h5>
              <div className="StatCard" style={{
                width:"90%",
                display: "grid",
                margin:"auto",
                gridTemplateColumns: "repeat(2, 1fr)",
              }}>
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
            <div className="dStat" style={{
              width:"45%",
              borderStyle:"outset",
              backgroundColor:"white",
            }}>
              <img src={helmet} style={{
                marginTop:"15px",
                height:"60%",
                width:"98%",
                marginBottom:"9px",
              }}/>
              <h5>{dinfo.map(item => item.name)}</h5>
              <div className="StatCard" style={{
                width:"90%",
                display: "grid",
                margin:"auto",
                gridTemplateColumns: "repeat(2, 1fr)",
              }}>
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
