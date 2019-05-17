import React, {Component} from "react";

import "./toolbar-css/toolbar.css"

import ToggleButton from "./open-button"

class ToolBar extends Component {
  constructor(props){
    super();
    this.state={
      Player: "James Harden"
    }
  }

  changeName(){
    this.props.nameSelect(this.state.Player);
  }
  render(){

    return(
      <header className= "Thead">
        <nav className= "Navbar">
        <ToggleButton click={this.props.sideClickHandler}/>
        <div className= "Logo"> Open </div>
        <button onClick={this.changeName.bind(this)}> Test button </button>
        <div className="Titems">
            <ul>
              <li>
                <input type="text" className="PlayerSearch"
                 placeholder="Search Player"/>
              </li>
              <li> Blogpost </li>
              <li> X-Dropdown </li>
              <li> Y-Dropdown </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default ToolBar;
