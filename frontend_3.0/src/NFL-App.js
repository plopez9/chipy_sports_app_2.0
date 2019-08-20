import React, { Component } from "react";

import "./NFL-Components/nfl.css";

import NflToolbar from "./NFL-Components/NflToolbar";
import LeaderTable from "./NFL-Components/Leaderboard";
import PlayerComparison from "./NFL-Components/PlayerComparison";


class NFLApp extends Component {

  render(){

    return(
      <div className="NFLApp">
        <NflToolbar/>
      </div>
    );
  }
}

export default NFLApp
