import React, { Component } from 'react';
import Chart from "react-apexcharts";

class ColumnChart extends Component {
	constructor(props) {
		console.log(props.players.map(player => player.datas.trophies))
         super(props);
         this.state = {
           options: {
             labels: props.players.map(player => player.datas.name),
             responsive: [{
               breakpoint: 480,
               options: {
                 chart: {
                   width: 200
                 },
                 legend: {
                   position: 'bottom'
                 }
               }
             }]
           },
           series: props.players.map(player => player.datas.trophies),
         }
       }
	

  render() {
  	return (
  		<div>
  		  <div id="trophies">
  				<Chart options={this.state.options} series={this.state.series}  type="bar" width="380" />
			
  			</div>
  		</div>
  	)
  }
}


export default ColumnChart
