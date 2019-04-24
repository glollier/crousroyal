import React, { Component } from 'react';
import { connect } from 'react-redux'
import Chart from "react-apexcharts";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU0MiwiaWRlbiI6IjIxMTEyODAyNTQxMDk2MTQxMCIsIm1kIjp7fSwidHMiOjE1NTYwMjQ1Njc2MDl9.a1Dd43GVTcwJhuhtyqIHH5jKPNaIBBnlsriA40d5xjk'
let fetchedData

class Stat extends Component {


componentDidMount(){
	fetch('https://api.royaleapi.com/player/QGUPYVY9,P9VCCCJJ2', {
		headers:{
			'auth' : token
		}})
	.then(result =>{
		return result.json()
	})
	.then(data =>{
		fetchedData = data
		console.log(fetchedData)
	})
}

render() {
	return (
		<div>
		{"Stat.js"}
		<div><pre>{JSON.stringify(fetchedData, null, 2) }</pre></div>
		</div>
	)
}


}

const mapStateToProps = (state) => {
	return state
}

export default connect(mapStateToProps)(Stat)
