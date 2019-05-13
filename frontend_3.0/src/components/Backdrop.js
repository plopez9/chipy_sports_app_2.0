import React from "react";

import "./css/backdrop.css";
import "./bootstrap.min.css";

import ScatterApp from "./Scatter_Container";
import PlayerApp from "./Player_Container";
import FirstPlot from "./Bar_Chart";

const Backdrop = props =>(
  <div className="back" onClick={props.BDClick}>

    <div className="row">
      <ScatterApp/>
    </div>

    <div className="row">
      <div className="col-md-6">
        <PlayerApp/>
      </div>
      <div className="col-md-6">
        <FirstPlot/>
      </div>
    </div>

    <div className="row">
      <div className="footer"> This is a footer </div>
    </div>
  </div>
);

export default Backdrop;
