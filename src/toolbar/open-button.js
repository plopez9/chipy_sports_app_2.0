import React, {Component} from "react";

import "./toolbar-css/open-button.css";

class ToggleButton extends Component {
  constructor(props){
    super();
  }

  render(){

    return(
      <button className="button" onClick={this.props.sideClickHandler}>
        <div className="line"/>
        <div className="line"/>
        <div className="line"/>
      </button>
  )
}
}

export default ToggleButton
