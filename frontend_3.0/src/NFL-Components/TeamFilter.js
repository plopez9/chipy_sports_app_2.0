import React, { Component } from "react";

import "./NFL-css/TeamFilter.css"

class FilterButton extends Component{
  constructor(props){
    super(props);

    this.state = {
      displayMenu:false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  };

  showDropdownMenu(event){
    event.preventDefault();
    this.setState({displayMenu: true}, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu(event){
    this.setState({displayMenu:false}, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render(){
    console.log(this.props.teams)
    return(
      <div className="button" onClick={this.showDropdownMenu} style={{
        backgroundColor:"rgb(153, 163, 164)",
        width: "100px",
        position:"relative",
      }}>
        <div className="buttonHeader" style={{
          display:"flex",
          justifyContent:"center",
          marginLeft:"20px",
          position:"fixed",
        }}>
          vs {this.props.currentTeam}
        </div>

      {this.state.displayMenu ? (
        <div className="drop" style={{
          backgroundColor:"rgb(229, 232, 232)",
          height:"95px",
          marginTop:"127px",
        }}>
          <div className="dropContent">
            <ul style={{
              overflow:"auto",
              height:"95px",
              float:"left",
              direction:"rtl"
            }}>
              {this.props.teams.map(item=> <li> {item.toUpperCase()} </li>)}
            </ul>
          </div>
        </div>
      ):
      (
        null
      )
      }
      </div>
      )
    };
}

export default FilterButton;
