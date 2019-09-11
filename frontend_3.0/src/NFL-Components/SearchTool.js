import React, { Component } from "react";



class SearchTool extends Component {

  constructor(props){
    super(props);
    this.state = {
      player:"Brady, Tom",
    };

    this.PlayerHandle = this.PlayerHandle.bind(this);
  }

  PlayerHandle(event) {
    this.setState({
      player: event.target.value
    })
  };

  render(){

    return(
        <div className="P1D">
          <button
           className="PushButton"
           onClick = {this.PlayerHandle.bind(this)}>
           Search
          </button>

          <input
           type="text"
           className="PlayerSearch"
           value={this.state.player}
           onChange={this.PlayerHandle.bind(this)}
           />
         </div>
    );
  }
}

export default SearchTool;
