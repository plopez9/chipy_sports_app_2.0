import React, { Component } from "react";
import {BrowserRouter, Route, NavLink,} from "react-router-dom";

import "./NFL-css/NflToolbar.css";

import LeaderTable from "./Leaderboard";
import PlayerComparison from "./PlayerComparison";
import Matchup from "./Matchup";

class NflToolbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      player1:"Brady, Tom",
      player2:"Wentz, Carson",
    };

    this.Player1Handle = this.Player1Handle.bind(this);
    this.Player2Handle = this.Player2Handle.bind(this);
  }

  Player1Handle(event) {
    this.setState({
      player1: event.target.value
    })
  }

  Player2Handle(event) {
    this.setState({
      player2: event.target.value
    })
  }

  render(){

    console.log(this.state)

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
             value={this.state.player2}
             onChange={(event) => this.Player2Handle(event)}
             />

            <button
             className="PushButton"
             onClick = {this.Player1Handle.bind(this)}>
             Search
            </button>

            <input
             type="text"
             className="PlayerSearch"
             value={this.state.player1}
             onChange={this.Player1Handle.bind(this)}

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
