import React, { Component } from 'react';
import { connect } from 'react-redux'
import Chart from "react-apexcharts";
import PieChart from './vues/PieChart'

class Stat extends Component {
render() {
	return (
		<div>
			<PieChart players={this.props.players}/>
			{"Stat.js"}
			<div><pre>{JSON.stringify(this.props.players, null, 2) }</pre></div>
		</div>
	)
}


}

const mapStateToProps = (state) => {
	return state
}

export default connect(mapStateToProps)(Stat)
