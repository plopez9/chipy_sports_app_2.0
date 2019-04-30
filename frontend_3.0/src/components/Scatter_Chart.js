import React, { Component } from "react";
import Plot from "react-plotly.js"

//import axios from "axios";


class SecondPlot extends Component{

  constructor(props){
    super(props);
    this.state={
      summary: [],
    };
  }

  componentDidMount(){
    fetch("http://localhost:8000/nba_package/jsonSummary/?format=json")
    .then(response => response.json())
    .then(json => {
      this.setState({
        summary: json,
      })
    });
  }

  render(){
    var {summary} = this.state;

    if (xdata!== undefined){
      // xdata = [summary.mp];
    }

    else{
      xdata= [];
    }
    let xdata= summary.map(item => item.mp)
    let ydata = summary.map(item => item.pts)


      return(
        <Plot
          data={[
            {
              x: xdata,
              y: ydata,
              type: "scatter",
              mode: "markers",
              marker: {color: "Blue"},
            }
          ]}

          layout ={{
            title: "Contract Obligations",
            yaxis:{
              title: "Money Owed"
            },
            xaxis: {
              title: "X Title"
            },
          }}
        />
      )
    }



}

export default SecondPlot;
