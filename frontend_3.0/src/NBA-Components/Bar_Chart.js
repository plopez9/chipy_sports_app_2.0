import React, { Component } from "react";
import Plot from "react-plotly.js"

//import axios from "axios";


class FirstPlot extends Component{

  constructor(props){
    super(props);
    this.state={
      items: [],
    };
  }

  componentWillMount(){
    fetch("http://localhost:8000/nba_package/jsonContracts/?format=json&player=LeBron James")
    .then(response => response.json())
    .then(json => {
      this.setState({
        items: json,
      })
    });
  }

  render(){
    var {items} = this.state;
    var ylist;

    const Contracts = items[0];

    if (Contracts !== undefined) {
      ylist = [Contracts.number_2018_19, Contracts.number_2019_20, Contracts.number_2020_21,
               Contracts.number_2021_22, Contracts.number_2022_23];
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
            title: "Contract Obligations",
            autosize: false,
            width:600,
            height:410,
            yaxis:{
              title: "Money Owed"
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
