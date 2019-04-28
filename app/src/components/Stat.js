import React, { Component } from 'react';
import { connect } from 'react-redux'
import Chart from "react-apexcharts";
import PieChart from './vues/PieChart'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Stat.css';
import Header from './vues/Header'
import Footer from './vues/Footer'
import { Redirect} from 'react-router-dom'

class Stat extends Component {
render() {
	return (
		this.props.playersAreValid
		? (
				<div>
					<Header />
					<PieChart players={this.props.players}/>
					{"Stat.js"}
					<div><pre>{JSON.stringify(this.props.players, null, 2) }</pre></div>
					<Footer />
				</div>
			)
		: <Redirect to="/" />
	)
}


}

const mapStateToProps = (state) => {
	return state
}

export default connect(mapStateToProps)(Stat)
