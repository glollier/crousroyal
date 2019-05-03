import React, { Component } from 'react';
import Chart from "react-apexcharts";
import PlayerName from './PlayerName'

class DonutChart extends Component {
	constructor(props) {
         super(props);
         this.state = {
           options: {
			 theme: {
			  monochrome: {
				enabled: true,
				color: '#d851b9',
				shadeTo: 'light',
				shadeIntensity: 0.65
			  }
			},
			 chart:{
				foreColor: '#ffffff'
			 },
			 stroke:{
				 show:false
			 },
             labels: this.labelCreator.bind(this)(this.props),
			 legend: {
					 show:false,
				 },
				 yaxis: {
		      decimalsInFloat: 0,
				},
				plotOptions: {
					pie: {
					  donut: {
					    size: '50%'
					  }
					}
				},
				dataLabels: {
					style: {
					 fontSize: '18px',
				 },
					dropShadow: {
						enabled: false,
						top: 1,
            left: 1,
            blur: 1,
            opacity: 1
					}
				}
		   },
           series: this.seriesCreator.bind(this)(this.props),
         }
       }
	 seriesCreator(props){
		 let tab = []
		 Object.keys(props).map((key, index) => {
			  return tab.push(props[key])
			})
			tab.splice(-2,2)
			return tab
	 }
	 labelCreator(props){
		 return Object.getOwnPropertyNames(props)
	 }
  render() {
  	return (
  		<div className="donutChart d-flex justify-content-center align-items-center">
				<div>
					<PlayerName
						playerName={this.props.playerName}
						playerColor={this.props.playerColor}
					/>
					<div>
						<Chart options={this.state.options} series={this.state.series} type="donut" width="200px" />
					</div>
				</div>
  		</div>
  	)
  }
}


export default DonutChart
