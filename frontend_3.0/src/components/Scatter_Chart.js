import React, { Component } from "react";
import Plot from "react-plotly.js"

//import axios from "axios";


class SecondPlot extends Component{
  render(){

      return(
        <Plot
          data={[
            {
              x: [1,2,3,4,5],
              y: [5,3,8,4,6],
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
