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
    const ylist = items.map(item=>{
      return(
        [item.number_2018_19, item.number_2019_20, item.number_2020_21,
          item.number_2021_22, item.number_2022_23]
      )
    })

    if (!isLoaded){

      return (
        <div>
          loading.....
        </div>
      )}

    else{
      console.log(items);
      console.log(isLoaded);
      console.log(ylist)

      return(
        <Plot
          data={[
            {
              x: [1,2,3,4,5],
              y: [1,2,3,4,5],
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
