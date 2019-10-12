import React, { Component } from "react";
import Plot from "react-plotly.js"

//import axios from "axios";


class SecondPlot extends Component{

  render(){
    var player =this.props.player
    var data = this.props.data

    var pdata = data.filter(function(item){
      return item.player.toLowerCase() === player.toLowerCase()
    });


      return(
        <Plot
          data={[
            {
              x: data.map(item => item.mp),
              y: data.map(item => item.pts),
              type: "scatter",
              mode: "markers",
              marker: {color: "Blue"},
              hoverinfo: "text",
              hovertext: data.map(item => item.player),
            },
            {
              x: pdata.map(item => item.mp),
              y: pdata.map(item => item.pts),
              type: "scatter",
              mode: "markers",
              marker: {color: "Red"},
              hoverinfo: "text",
              hovertext: pdata.map(item => item.player),
            }
          ]}

          layout ={{
            autosize: true,
            title: "Points Scored vs Minutes Played",
            showlegend: false,
            yaxis:{
              title: "Points Scored per Game"
            },
            xaxis: {
              title: "Minutes Played per Game"
            },
          }}
        />
      )
    }



}

export default SecondPlot;
