import React from "react";

import "./toolbar-css/toolbar.css"

import ToggleButton from "./open-button"

const ToolBar = props => (
  <header className= "Thead">
    <nav className= "Navbar">
    <ToggleButton click={props.sideClickHandler}/>
    <div className= "Logo"> Open </div>
    <div className="Titems">
        <ul>
          <li> Search Player </li>
          <li> Blog Post </li>
          <li> X-Axis </li>
          <li> Y-Axis </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default ToolBar;
