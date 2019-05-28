import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import "./toolbar-css/side-nav.css"

import CloseButton  from "./close-button"

const Sidenav = props => {

    let navClasses="sidenav";

    if (props.show){
      navClasses="sidenav open"
    }
  return(
    <nav className= {navClasses}>
      <div className="sidediv">
        <CloseButton className="Button" click={props.SNClick}/>
        <BrowserRouter>
          <ul>
            <li></li>
            <li> <a href="./src/App.js"> Main Page </a> </li>
            <li> <a href="./src/App.js"> NBA Dashboard </a> </li>
            <li> <a href="./src/NFL-App.js"> NFL Dashboard </a> </li>
            <li> <a href="./src/NFL-App.js"> MLB Dashboard </a> </li>
          </ul>
        </BrowserRouter>
        </div>
    </nav>
  );
};

export default Sidenav;
