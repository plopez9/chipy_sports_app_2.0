import React, { Component } from "react";



class SearchTool extends Component {

  constructor(props){
    super(props);
    this.state = {
      player:[],
    };

    this.PlayerHandle = this.PlayerHandle.bind(this);
  }

  changeName(){
    this.props.nameSelect(this.state.player);
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
           onClick = {this.changeName.bind(this)}>
           Search
          </button>

          <input
           type="text"
           className="PlayerSearch"
           placeholder="Search Player"
           value={this.state.player}
           onChange={this.PlayerHandle.bind(this)}
           />
         </div>
    );
  }
}

export default SearchTool;
