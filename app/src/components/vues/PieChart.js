import React, { Component } from 'react';
import Chart from "react-apexcharts";

class PieChart extends Component {
	constructor(props) {
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
  		  <div id="chart">
  				<Chart options={this.state.options} series={this.state.series} type="pie" width="380" />
  			</div>
  		</div>
  	)
  }
}


export default PieChart
