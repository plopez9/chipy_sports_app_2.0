import React from "react";

import "./css/close-button.css";

const CloseButton = props => (
  <button className="button" onClick={props.click}>
    <div className="marker">X</div>
  </button>
)

export default CloseButton
