import React, { Component } from "react";
import {BrowserRouter, Route, NavLink,} from "react-router-dom";

import LeaderTable from "./Leaderboard"
import PlayerComparison from "./PlayerComparison";

class NflToolbar extends Component {

  render(){

    return(
      <BrowserRouter>
        <nav className="FootballNav" style={{
          backgroundColor: "black",
          height: "100px",
          position: "relative",
        }}>
          <div className="ListSpacing" style={{
            width: "35%",
            position: "relative",
            top:"50%",
            transform:"translateY(-50%)" ,
            float: "right",
          }}>
            <ul className="ComponentList" style={{
              display:"flex",
              justifyContent: "space-evenly",
              marginTop: "15px",
            }}>


              <li style={{
                color:"white",
                display:"inline",
                marginRight: "15px",
              }}>
                <NavLink to="/NFL/Leaderboard"> Leaderboard </NavLink>
              </li>


              <li style={{
                color:"white",
                display:"inline",
                marginRight: "15px",
              }}>
                <NavLink to="/NFL/PlayerComparison"> Player Comparison </NavLink>
              </li>


              <li style={{
                color:"white",
                display:"inline",
                marginRight: "15px",
              }}> Matchup Tool
              </li>
            </ul>
          </div>

          <div className = "PlayerButtons" style={{
            width: "60%",
            float: "right",
            position: "relative",
            top:"50%",
            transform:"translateY(-50%)" ,
          }}>
            <button
             className="PushButton" style={{
               float: "right",
             }}>
              Search </button>

            <input
             type="text"
             className="PlayerSearch"
             placeholder="Player 2"
             style={{
               width: "175px",
               float: "right",
               marginRight: "7px",
             }}/>

            <button
             className="PushButton" style={{
               float: "right",
             }}>
              Search </button>

            <input
             type="text"
             className="PlayerSearch"
             placeholder="Player 1"
             style={{
               width: "175px",
               float: "right",
               marginRight: "7px",
             }}/>
          </div>
        </nav>
          <Route path="/NFL/Leaderboard" component={LeaderTable}/>
          <Route path="/NFL/PlayerComparison" component={PlayerComparison}/>
      </BrowserRouter>
    )
  }
}

export default NflToolbar;
