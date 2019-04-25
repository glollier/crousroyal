import React, { Component } from 'react';
import { connect } from 'react-redux'
import Chart from "react-apexcharts";
import { addDatas, setPlayers} from '../actions/playerManager'
import PieChart from './vues/PieChart'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU0MiwiaWRlbiI6IjIxMTEyODAyNTQxMDk2MTQxMCIsIm1kIjp7fSwidHMiOjE1NTYwMjQ1Njc2MDl9.a1Dd43GVTcwJhuhtyqIHH5jKPNaIBBnlsriA40d5xjk'
let fetchedData

class Stat extends Component {
	setDatas(){
		fetch('https://api.royaleapi.com/player/QGUPYVY9,P9VCCCJJ2', {
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
			{console.log(this.props.players)}
			{"Stat.js"}
			<button onClick={setPlayers.bind(this)}>Set</button>
			<button onClick={setPlayers.bind(this), this.setDatas.bind(this)}>Data</button>
			<div><pre>{JSON.stringify(this.props.players, null, 2) }</pre></div>
		</div>
	)
}


}

const mapStateToProps = (state) => {
	return state
}

export default connect(mapStateToProps)(Stat)
