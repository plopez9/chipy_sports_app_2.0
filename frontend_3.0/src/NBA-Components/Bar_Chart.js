import React, { Component } from "react";
import Plot from "react-plotly.js"

//import axios from "axios";


class FirstPlot extends Component{

  render(){
    var player = this.props.player
    var data = this.props.contracts

    var contract = data.filter(function(item){
      return item.player === player
    })[0];

    if (contract !== undefined) {
      var ylist = [contract.number_2018_19, contract.number_2019_20, contract.number_2020_21,
           contract.number_2021_22, contract.number_2022_23];
      } else {
        ylist = [];
      }


      return(
        <Plot
          data={[
            {
              x: ["2018-19","2019-20","2020-21","2021-22","2022-23"],
              y: ylist,
              type: "bar",
              mode: "markers",
              marker: {color: "Blue"},
            }
          ]}

          layout ={{
            title: player + "'s Contract Obligations",
            autosize: false,
            width:600,
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
      )
    }
}


export default FirstPlot;
