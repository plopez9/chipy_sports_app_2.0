import React, { Component } from "react";
import Plot from "react-plotly.js"

//import axios from "axios";


class FirstPlot extends Component{

  state={
    ContractItems:[],
  }

  componentWillMount(){
    fetch("http://localhost:8000/nba_package/Contracts/?format=json")
    .then(response => response.json())
    .then(json => {
      this.setState({
        ContractItems: json,
      })
    });
  }

  render(){
    var player = this.props.player
    var data = this.state.ContractItems

    var contract = data.filter(function(item){
      return item.player === player
    })[0];

    if (contract !== undefined) {
      var ylist = [contract.number_2019_20, contract.number_2020_21,
           contract.number_2021_22, contract.number_2022_23, contract.number_2023_24];
      } else {
        ylist = [];
      }


      return(
        <div className="Contract-data">
        <Plot
          data={[
            {
              x: ["2019-20","2020-21","2021-22","2022-23", "2023-24"],
              y: ylist,
              type: "bar",
              mode: "markers",
              marker: {color: "Blue"},
            }
          ]}

          layout ={{
            title: player + "'s Contract Obligations",
            autosize: false,
            width:750,
            height:410,
            yaxis:{
              title: "Money Owed",
              range: [0, 50000000]
            },
            xaxis: {
              title: "Year"
            },
          }}
        />
        </div>
      )
    }
}


export default FirstPlot;
