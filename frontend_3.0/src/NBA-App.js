import React, { Component } from "react";

import "./NBA-App.css";

import ToolBar from "./NBA-Components/NBAtoolbar";
import ScatterApp from "./NBA-Components/Scatter_Container";
import FirstPlot from "./NBA-Components/Bar_Chart";
import PlayerApp from "./NBA-Components/Player_Container";

class NBAApp extends Component {

  state = {
    Player:"James Harden",
    SummaryItems: [],
    ContractItems: [],
    InfoItems:[],
  };


  PlayerSelect(input){
    this.setState({
      Player: input
    });
  }

  componentWillMount(){
    fetch("http://localhost:8000/nba_package/Summary/?format=json")
    .then(response => response.json())
    .then(json => {
      this.setState({
        SummaryItems: json,
      })
    });

    fetch("http://localhost:8000/nba_package/PlayerInfo/?format=json")
    .then(response => response.json())
    .then(json => {
      this.setState({
        InfoItems: json,
      })
    });

    fetch("http://localhost:8000/nba_package/Contracts/?format=json")
    .then(response => response.json())
    .then(json => {
      this.setState({
        ContractItems: json,
      })
    });
  };


  render(){
    console.log(this.state.Player)
    return(
      <div className="NBA_App">

      <ToolBar nameSelect={this.PlayerSelect.bind(this)}
      player={this.state.Player}/>

        <div className="TopRow">

        </div>

        <div className="Row">
        </div>

      </div>
    );
  }
}

export default NBAApp
