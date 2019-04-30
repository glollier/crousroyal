import React, { Component } from 'react';
import Chart from "react-apexcharts";

class DonutChart extends Component {
	constructor(props) {
         super(props);
         this.state = {
           options: {
			 chart:{
				foreColor: '#ffffff'
			 },
			 stroke:{
				 show:false
			 },
             labels: this.labelCreator.bind(this)(this.props),
			 legend: {
					 show:false,
				 }
		   },
           series: this.seriesCreator.bind(this)(this.props),
         }
       }
	 seriesCreator(props){
		 let tab = []
		 Object.keys(props).map((key, index) => {
			  tab.push(props[key])
			})
			tab.splice(-1,1)
			return tab
	 }
	 labelCreator(props){
		 return Object.getOwnPropertyNames(props)
	 }
  render() {
  	return (
  		<div className="donutChart d-flex justify-content-center align-items-center">
				<div>
					<div className="pseudo">
						{this.props.playerName}
					</div>
					<div>
						<Chart options={this.state.options} series={this.state.series} type="donut" width="200px" />
					</div>
				</div>
  		</div>
  	)
  }
}


export default DonutChart
