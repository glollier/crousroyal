import React, { Component } from 'react';
import { connect } from 'react-redux'
import Chart from "react-apexcharts";
<<<<<<< HEAD
import PieChart from './vues/PieChart';
import ColumnChart from './vues/ColumnChart';
=======
import DonutChart from './vues/DonutChart'
>>>>>>> ea4438b033e963cda2c6aa53a54d8eedc4922392
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Stat.css';
import Header from './vues/Header'
import Footer from './vues/Footer'
import VersusDisplayer from './vues/VersusDisplayer'
import { Redirect} from 'react-router-dom'

class Stat extends Component {
render() {
	return (
		this.props.playersAreValid
		? (
				<div>
					<Header />
<<<<<<< HEAD
					<PieChart players={this.props.players}/>
					<ColumnChart players={this.props.players}/>	
					/*
					<div><pre>{JSON.stringify(this.props.players, null, 2) }</pre></div>*/
=======
					<div className="statsContent">
						<div className="statsContainer">
							<VersusDisplayer players={this.props.players}/>
						</div>
						<div className="statsContainer">
							{
								this.props.players.map(player =>
								<DonutChart
									key={player.datas.name}
									Wins={player.datas.games.wins}
									Losses={player.datas.games.losses}
									Draws={player.datas.games.draws}
									playerName={player.datas.name}
								/>)
							}
						</div>
					</div>
					<div><pre>{JSON.stringify(this.props.players, null, 2) }</pre></div>
>>>>>>> ea4438b033e963cda2c6aa53a54d8eedc4922392
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
