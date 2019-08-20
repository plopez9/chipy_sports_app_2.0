import React, { Component } from "react";

import "./NBA-App.css";

import ToolBar from "./toolbar/toolbar";
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

    return(
      <div className="App">

      <ToolBar nameSelect={this.PlayerSelect.bind(this)}/>

        <div className="TopRow">
          <ScatterApp player={this.state.Player} data={this.state.SummaryItems}/>
        </div>

        <div className="Row">
          <div className="Player-data">
            <PlayerApp player={this.state.Player} info={this.state.InfoItems}
             data={this.state.SummaryItems}/>
          </div>
          <div className="Contract-data">
            <FirstPlot player={this.state.Player} contracts={this.state.ContractItems}/>
          </div>
        </div>

      </div>
    );
  }
}

export default NBAApp
