import React from "react";

import "./css/side-nav.css"

const Sidenav = props => (
  <nav className="sidenav">
    <div className="sidediv">
      <div className="Closetag"> X </div>
      <ul>
        <li></li>
        <li> Main Page</li>
        <li> NBA Dashboard </li>
        <li> NFL Dashboard </li>
        <li> MLB Dashboard </li>
        </ul>
    </div>
  </nav>
);

export default Sidenav;
