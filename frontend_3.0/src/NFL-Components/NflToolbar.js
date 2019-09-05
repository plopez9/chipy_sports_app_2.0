import React, { Component } from "react";
import {BrowserRouter, Route, NavLink,} from "react-router-dom";

import "./NFL-css/NflToolbar.css";

import LeaderTable from "./Leaderboard";
import PlayerComparison from "./PlayerComparison";
import Matchup from "./Matchup";

class NflToolbar extends Component {

  state = {
    player1:"Brady, Tom",
    player2:"Wentz, Carson",
  };

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

            <button
             className="PushButton">
             Search
            </button>

            <input
             type="text"
             className="PlayerSearch"
             placeholder="Player 1"
             />
          </div>
        </nav>
          <Route path="/NFL/Leaderboard" component={LeaderTable}/>
          <Route path="/NFL/PlayerComparison"
           render = {(props) => <PlayerComparison
            player1={this.state.player1}
            player2={this.state.player2}
            />}/>
          <Route path = "/NFL/MatchupTool"
           render = {(props) => <Matchup
             player1={this.state.player1}
             player2={this.state.player2}
             />}/>
      </BrowserRouter>
    )
  }
}

export default NflToolbar;
