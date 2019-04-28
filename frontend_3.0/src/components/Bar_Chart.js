import React, { Component } from "react";
import Plot from "react-plotly.js"

//import axios from "axios";


class FirstPlot extends Component{

  constructor(props){
    super(props);
    this.state={
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount(){
    fetch("http://localhost:8000/nba_package/jsonContracts/?format=json&player=Stephen%20Curry")
    .then(response => response.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });
  }

  render(){
    var {isLoaded, items} = this.state;
    var ylist;
    console.log('items is:', items)
    const pInfo = items[0];
    console.log('pinfo is:', pInfo)
    if (pInfo != undefined) {
      ylist = [pInfo.number_2018_19, pInfo.number_2019_20, pInfo.number_2020_21,
               pInfo.number_2021_22, pInfo.number_2022_23];
    } else {
      ylist = [];
    }
    console.log("ylist is:", ylist)

    if (!isLoaded){

      return (
        <div>
          loading.....
        </div>
      )}

    else{

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
}


export default FirstPlot;
