import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";

import "./toolbar-css/side-nav.css"

import MainPage from "../Main-Page"
import NBAApp from "../NBA-App"
import NFLApp from "../NFL-App"
import MLBApp from "../MLB-App"
import CloseButton  from "./close-button"

const Sidenav = props => {

    let navClasses="sidenav";

    if (props.show){
      navClasses="sidenav open"
    }
  return(
    <BrowserRouter>
    <nav className= {navClasses}>
      <div className="sidediv">
        <CloseButton className="Button" click={props.SNClick}/>
          <ul>
            <li></li>
            <li> <a href="/"> Main Page </a> </li>
            <li>
              <Link to="/NBA/ScoringSummary"> NBA Dashboard </Link>
            </li>
            <li>
              <Link to="/NFL/Leaderboard"> NFL Dashboard </Link>
            </li>
            <li>
              <Link to="/MLB"> MLB Dashboard </Link>
            </li>
          </ul>
        </div>
    </nav>

    <Route exact path="/" component={MainPage}/>
    <Route path="/NBA" component={NBAApp}/>
    <Route path="/NFL" component={NFLApp}/>
    <Route path="/MLB" component={MLBApp}/>

  </BrowserRouter>
  );
};

export default Sidenav;
