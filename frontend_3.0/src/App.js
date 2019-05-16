import React, { Component } from "react";

import "./App.css";

import Sidenav from "./toolbar/sidenav.js";
import ToolBar from "./toolbar/toolbar";

import ScatterApp from "./NBA-Components/Scatter_Container";
import FirstPlot from "./NBA-Components/Bar_Chart";
import PlayerApp from "./NBA-Components/Player_Container";

class NBAApp extends Component {

  state = {
    SNOpen: false,
    Player:"Bradley Beal",
    SummaryItems: [],
    ContractItems: [],
    InfoItems:[],
  };

  SNTClickHandler =() => {
    this.setState((prevState) => {
      return {SNOpen: !prevState.SNOpen};
    });
  };

  CloseClickHandler = () =>{
    this.setState({SNOpen: false})
  };

  componentWillMount(){
    fetch("http://localhost:8000/nba_package/jsonSummary/?format=json")
    .then(response => response.json())
    .then(json => {
      this.setState({
        SummaryItems: json,
      })
    });

    fetch("http://localhost:8000/nba_package/jsonPlayerInfo/?format=json")
    .then(response => response.json())
    .then(json => {
      this.setState({
        InfoItems: json,
      })
    });

    fetch("http://localhost:8000/nba_package/jsonContracts/?format=json")
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
        <Sidenav show={this.state.SNOpen} SNClick={this.CloseClickHandler}/>
        <ToolBar sideClickHandler={this.SNTClickHandler}/>

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

        <div className="footer">
          <div className="footer1"> Footer 1 </div>
          <div className="footer2"> Footer 2 </div>
          <div className="footer3"> Footer 3 </div>
        </div>

      </div>
    );
  }
}

export default NBAApp
