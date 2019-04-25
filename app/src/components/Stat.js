import React, { Component } from 'react';
import { connect } from 'react-redux'
import Chart from "react-apexcharts";
import { addDatas, setPlayers} from '../actions/playerManager'
import PieChart from './vues/PieChart'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU0MiwiaWRlbiI6IjIxMTEyODAyNTQxMDk2MTQxMCIsIm1kIjp7fSwidHMiOjE1NTYwMjQ1Njc2MDl9.a1Dd43GVTcwJhuhtyqIHH5jKPNaIBBnlsriA40d5xjk'
let fetchedData

class Stat extends Component {

	componentDidMount(){
		let toFetch = 'https://api.royaleapi.com/player/' + this.props.request
		fetch(toFetch, {
			headers:{
				'auth' : token
			}})
		.then(result =>{
			return result.json()
		})
		.then(data =>{
			fetchedData = data
			fetchedData.map(player => addDatas.bind(this)(player))

		})
	}

render() {
	return (
		<div>
			<PieChart />
			{setPlayers.bind(this)}
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
