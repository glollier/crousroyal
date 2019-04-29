import React, { Component } from 'react';
import Chart from "react-apexcharts";


class StackedBar extends Component {
  constructor(props) {
          super(props);

          this.state = {
            options: {
              chart: {
                stacked: true,
                stackType: '100%'
              },
              markers: {
                  colors: "['#fff']"
              },
              plotOptions: {
                bar: {
                  horizontal: true,
                },
              },
              stroke: {
                width: 1,
                colors: "['#fff']"
              },
              xaxis: {
                categories: this.props.players.map( player => player.datas.name),
              },
              fill: {
                opacity: 1
              },
              legend: {
                position: 'top',
                horizontalAlign: 'left',
                offsetX: 40
              }
            },
            series: [{
              name: 'Lvl 1 - 3',
              data: this.series1to3Creator.bind(this)(this.props)
            }, {
              name: 'Lvl 4 - 6',
              data: this.series4to6Creator.bind(this)(this.props)
            }, {
              name: 'Lvl 7 - 9',
              data: this.series7to9Creator.bind(this)(this.props)
            }, {
              name: 'Lvl 10 - 12',
              data: this.series10to12Creator.bind(this)(this.props)
            }, {
              name: 'Lvl 13',
              data: this.series13Creator.bind(this)(this.props)
            }],
          }
        }
        series1to3Creator(props){
          return props.players.map( player => player.datas.cards.map(card => card.level).filter(level => level <= 3).length)
        }
        series4to6Creator(props){
          return props.players.map( player => player.datas.cards.map(card => card.level).filter(level => level >= 4  && level <= 6).length)
        }
        series7to9Creator(props){
          return props.players.map( player => player.datas.cards.map(card => card.level).filter(level => level >= 7  && level <= 9).length)
        }
        series10to12Creator(props){
          return props.players.map( player => player.datas.cards.map(card => card.level).filter(level => level >= 10  && level <= 12).length)
        }
        series13Creator(props){
          return props.players.map( player => player.datas.cards.map(card => card.level).filter(level => level === 13).length)
        }
  render() {
  	return (
  		<div>
        <div id="chart">
          <Chart options={this.state.options} series={this.state.series} type="bar" height="350" />
        </div>
      </div>
  	)
  }
}


export default StackedBar
