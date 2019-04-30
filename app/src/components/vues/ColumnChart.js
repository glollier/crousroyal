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
							columnWidth: '20%',
							endingShape: 'rounded'	
						},
					},
					dataLabels: {
						enabled: true
					},
					stroke: {
						show: true,
						width: 2,
						colors: ['transparent']
					}

				},
				series: this.seriesCreator.bind(this)(this.props),
		}
	}
	seriesCreator(props){
		let tab = []
		let temp = []
		Object.keys(props).map((key, index) => {
			  tab.push(props[key])
			})
		for(let i=0;i<tab[0].length;i++){
			temp[i] = {
				name:tab[1][i],
				data: [tab[0][i]]
			}
		}
		tab = temp
		return tab
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
