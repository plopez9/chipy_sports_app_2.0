import React, {Component} from "react";

import "./toolbar-css/toolbar.css"

import ToggleButton from "./open-button"

class ToolBar extends Component {
  constructor(props){
    super();
    this.state={
      Player: props.currentPlayer,
      SNOpen: false,

    }
  }

  SNTClickHandler =() => {
    this.setState((prevState) => {
      return {SNOpen: !prevState.SNOpen};
    });
  };

  changeName(){
    this.props.nameSelect(this.state.Player);
  }

  eventHandle(event) {
    this.setState({
      Player: event.target.value
    })
  }

  render(){
    console.log(this.state)
    return(
      <header className= "Thead">
        <nav className= "Navbar">
        <div className="Spacer"></div> 
        <div className= "Logo"> Open </div>
        <div className="Titems">
            <ul>
              <li className ="SearchButton">
                <button
                 className="PushButton"
                 onClick={this.changeName.bind(this)}>
                  Search </button>
                <input
                 type="text"
                 className="PlayerSearch"
                 placeholder="Search Player"
                 value={this.state.Player}
                 onChange={(event) => this.eventHandle(event)}
                />
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
