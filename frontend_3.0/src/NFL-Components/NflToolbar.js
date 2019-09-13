import React, { Component } from "react";
import {BrowserRouter, Route, NavLink,} from "react-router-dom";

import "./NFL-css/NflToolbar.css";

import LeaderTable from "./Leaderboard";
import PlayerComparison from "./PlayerComparison";
import Matchup from "./Matchup";
import SearchTool from "./SearchTool";

class NflToolbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      player1:"Brady, Tom",
      player2: "Rodgers, Aaron",
    };
  }

  Player1Select(input){
    this.setState({
      player1: input
    });
  }

  Player2Select(input){
    this.setState({
      player2: input
    });
  }

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

          <div className ="PlayerButtons">
            <SearchTool nameSelect={this.Player2Select.bind(this)}/>
            <SearchTool nameSelect={this.Player1Select.bind(this)}/>
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
