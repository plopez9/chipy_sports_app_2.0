import React, { Component } from "react";

import "./bootstrap.min.css";
import"./css/Player_Container.css";
import avatar from "./images/default-avatar.png";


class PlayerApp extends Component {

  constructor(props){
    super(props);
    this.state={
      pInfo: [],
      stats: [],
    };
  }

  componentDidMount(){
    fetch("http://localhost:8000/nba_package/jsonPlayerInfo/?format=json&player=Stephen%20Curry")
    .then(response => response.json())
    .then(json => {
      this.setState({
        pInfo: json,
      })
    });

    fetch("http://localhost:8000/nba_package/jsonSummary/?format=json&player=Stephen%20Curry")
    .then(response => response.json())
    .then(json => {
      this.setState({
        stats: json,
      })
    });
  }

  render(){
    var {pInfo, stats} = this.state
    console.log(this.state.stats)

    return(
      <div className="App">
        <div className="card">

            <div className="Player_Row" >
              <div className="Player_Column">
                <div className="card-header">
                  <img src={avatar}/>
                </div>
              </div>

              <div className="Player_Column_Right">
                <div className="Player_Info">
                  <div className="Prow">
                    {pInfo.map(item=>
                      <h2> {item.player} </h2>
                    )}
                  </div>
                  <div className="Player_Info_Table">
                    <div className="Prow">
                      {pInfo.map(item=>
                        <p> {item.college} </p>
                      )}
                    </div>
                    <div className="Prow">
                      {pInfo.map(item=>
                        <a>Position: {item.pos} </a>
                      )}
                    </div>
                    <div className="Prow">
                      {pInfo.map(item=>
                        <a>Birthday: {item.birth_date}</a>
                      )}
                    </div>
                    <div className="Prow">
                      {pInfo.map(item=>
                        <a>Ht: {item.ht},</a>
                      )}
                      {pInfo.map(item=>
                        <a> Wt: {item.wt}lbs </a>
                      )}
                    </div>
                    <div className="Prow">
                      {pInfo.map(item=>
                        <a>Experience: {item.exp} yrs </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body">
              <div className="row">
                <div className="table-responsive">
                  <table className="table">
                    <thead className=" text-primary">
                      <tr>
                      <th> Year </th>
                      <th> G </th>
                      <th> GS </th>
                      <th> MP </th>
                      <th> Ft% </th>
                      <th> 2P% </th>
                      <th> 3P% </th>
                      <th> Tov </th>
                      <th> Blk </th>
                      <th> Stl </th>
                      <th> Reb </th>
                      <th> Ast </th>
                      <th> Pts </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td> 2019 </td>
                        <td> 40 </td>
                        <td> 45 </td>
                        <td> 32.1 </td>
                        <td> 0.789 </td>
                        <td> 0.562 </td>
                        <td> 0.327 </td>
                        <td> 3.1 </td>
                        <td> 0.9 </td>
                        <td> 4.2 </td>
                        <td> 2.2 </td>
                        <td> 6.7 </td>
                        <td> 14.1 </td>
                      </tr>

                      <tr>
                        <td> 2018 </td>
                        <td> 40 </td>
                        <td> 45 </td>
                        <td> 32.1 </td>
                        <td> 0.789 </td>
                        <td> 0.562 </td>
                        <td> 0.327 </td>
                        <td> 3.1 </td>
                        <td> 0.9 </td>
                        <td> 4.2 </td>
                        <td> 2.2 </td>
                        <td> 6.7 </td>
                        <td> 14.1 </td>
                      </tr>

                      <tr>
                        <td> 2017 </td>
                        <td> 40 </td>
                        <td> 45 </td>
                        <td> 32.1 </td>
                        <td> 0.789 </td>
                        <td> 0.562 </td>
                        <td> 0.327 </td>
                        <td> 3.1 </td>
                        <td> 0.9 </td>
                        <td> 4.2 </td>
                        <td> 2.2 </td>
                        <td> 6.7 </td>
                        <td> 14.1 </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default PlayerApp
