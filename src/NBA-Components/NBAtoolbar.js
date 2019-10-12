import React, {Component} from "react";
import {BrowserRouter, Route, NavLink,} from "react-router-dom";

import ScatterApp from "./Scatter_Container"
import PlayerApp from "./Player_Container"
import FirstPlot from "./Bar_Chart"

import "./NBA-Component-css/toolbar.css"

class ToolBar extends Component {
  constructor(props){
    super();
    this.state={
      Player: props.player,
    }
  }

  changeName(){
    this.props.nameSelect(this.state.Player);
  }

  eventHandle(event) {
    this.setState({
      Player: event.target.value
    })
  }

  render(){
    console.log(this.props.player)
    return(
      <header className= "Thead">
        <BrowserRouter>
        <nav className= "Navbar">
        <div className="Spacer"></div>
        <div className= "Logo"> Open </div>
        <div className="Titems">
            <ul>
              <li className ="SearchButton">
                <button
                 className="PushButton"
                 onClick={this.changeName.bind(this)}>
                  Search </button>
                <input
                 type="text"
                 className="PlayerSearch"
                 placeholder="Search Player"
                 value={this.state.Player}
                 onChange={(event) => this.eventHandle(event)}
                />
              </li>
              <li><NavLink to="/NBA/ScoringSummary"> Scoring Summary </NavLink></li>
              <li><NavLink to="PlayerStats"> Player Stats </NavLink> </li>
              <li><NavLink to ="/NBA/Contract"> Contract </NavLink></li>
            </ul>
          </div>
        </nav>

        <div className="RoutingDiv" style={{
          display: "flex",
          justifyContent: "center",
          alignItems:"center",
          height: "485px",
        }}>
        <Route path="/NBA/ScoringSummary"
        render = {(props) => <ScatterApp
          player = {this.props.player}/>}
          />

        <Route path="/NBA/PlayerStats"
        render = {(props) => <PlayerApp
          player = {this.props.player}/>}
          />

        <Route path="/NBA/Contract"
        render = {(props) => <FirstPlot
          player = {this.props.player}/>}
          />

        </div>

        </BrowserRouter>
      </header>
    )
  }
}

export default ToolBar;
