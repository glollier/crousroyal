import React, { Component } from 'react';
import Chart from "react-apexcharts";

class ColumnChart extends Component {
	constructor(props) {
		
        super(props);
        this.state = {
			options: {
				 chart: {
						height: 500,
						type: 'bar',
					  	foreColor: '#ffffff'
					},
					plotOptions: {
						bar: {
							horizontal: false,
							columnWidth: '55%',
							endingShape: 'rounded'	
						},
					},
					dataLabels: {
						enabled: false
					},
					stroke: {
						show: true,
						width: 2,
						colors: ['transparent']
					}

				},
				series: [{
						name: 'Pseudo',
						data: [44,]
					},{
						name: 'Rocco',
						data: [58,]
					}
				],
				dataLabels: {
				  style: {
					colors: ['#F44336', '#E91E63', '#9C27B0']
				  }
				},
				grid: {
				  row: {
					colors: ['#F44336', '#E91E63', '#9C27B0']
				  },
				  column: {
					colors: ['#F44336', '#E91E63', '#9C27B0']
				  }
				}
		}
	}
	

  render() {
  	return (
  		<div>
  		  <div className="barChart d-flex justify-content-center align-items-center">
  				<Chart options={this.state.options} series={this.state.series}  type="bar" width="400px" height="400px" />
			
  			</div>
  		</div>
  	)
  }
}


export default ColumnChart
