import React, { Component } from "react";
import Plot from "react-plotly.js"

//import axios from "axios";


class SecondPlot extends Component{

  constructor(props){
    super(props);
    this.state={
      summary: [],
      individual: [],
    };
  }

  componentWillMount(){
    fetch("http://localhost:8000/nba_package/jsonSummary/?format=json")
    .then(response => response.json())
    .then(json => {
      this.setState({
        summary: json,
      })
    });

    fetch("http://localhost:8000/nba_package/jsonSummary/?format=json&player=LeBron James")
    .then(response => response.json())
    .then(json => {
      this.setState({
        individual: json,
      })
    });
  }

  render(){
    var {summary, individual} = this.state;


    let xdata= summary.map(item => item.mp)
    let ydata = summary.map(item => item.pts)
    let name = summary.map(item => item.player)

    let px= individual.map(item => item.mp)
    let py= individual.map(item => item.pts)
    let pname = individual.map(item =>item.player)

    console.log(px)


      return(
        <Plot
          data={[
            {
              x: xdata,
              y: ydata,
              type: "scatter",
              mode: "markers",
              marker: {color: "Blue"},
              hovertext: name,
              hoverinfo: "text",
            },
            {
              x: px,
              y: py,
              type: "scatter",
              mode: "markers",
              marker: {color: "Red"},
              hovertext: pname,
              hoverinfo: "text",
            }
          ]}

          layout ={{
            title: "Contract Obligations",
            showlegend: false,
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
