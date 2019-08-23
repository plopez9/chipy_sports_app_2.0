import React, { Component } from "react";
import {BrowserRouter, Route, NavLink,} from "react-router-dom";

import "./NFL-css/NflToolbar.css"

import LeaderTable from "./Leaderboard"
import PlayerComparison from "./PlayerComparison";

class NflToolbar extends Component {

  render(){

    return(
      <BrowserRouter>
        <nav className="FootballNav">
          <div className="ListSpacing">
            <ul className="ComponentList">
              <li>
                <NavLink to="/NFL/Leaderboard"> Leaderboard </NavLink>
              </li>

              <li>
                <NavLink to="/NFL/PlayerComparison"> Player Comparison </NavLink>
              </li>

              <li>
                <NavLink to="/NFL/MatchupTool"> Matchup Tool </NavLink>
              </li>
            </ul>
          </div>

          <div className ="PlayerButtons" style = {{
            marginRight:"0px",
          }}>
            <button className="PushButton"> Search </button>
            <input
             type="text"
             className="PlayerSearch"
             placeholder="Player 2"
             />

            <button className="PushButton"> Search </button>
            <input
             type="text"
             className="PlayerSearch"
             placeholder="Player 1"
             />
          </div>
        </nav>
          <Route path="/NFL/Leaderboard" component={LeaderTable}/>
          <Route path="/NFL/PlayerComparison" component={PlayerComparison}/>
      </BrowserRouter>
    )
  }
}

export default NflToolbar;
