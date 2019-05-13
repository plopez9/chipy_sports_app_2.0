import React from "react";

import "./css/toolbar.css"

import ToggleButton from "./open-button"

const ToolBar = props => (
  <header className= "Thead">
    <nav className= "Navbar">
    <ToggleButton click={props.sideClickHandler}/>
    <div className= "Logo"> Open </div>
    <div className="Titems">
        <ul>
          <li> Blog Posts </li>
          <li> Search Player </li>
          <li> X Dropdown </li>
          <li> Y Dropdown </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default ToolBar;
