import React, { Component } from 'react';
import DonutChart from './DonutChart'

class WinratePieList extends Component {
  render() {
  	return (
      <div>
        <div className="legend">
          <div className="legendItem">
            <div className="legendCircle orange"></div>
            Egalités
          </div>
          <div className="legendItem">
            <div className="legendCircle blue"></div>
            Victoires
          </div>
          <div className="legendItem">
            <div className="legendCircle green"></div>
            Defaites
          </div>
        </div>
        <div className="listContainer">
            {
            this.props.players.map(player =>
            <DonutChart
              key={player.datas.name}
              Wins={player.datas.games.wins}
              Losses={player.datas.games.losses}
              Draws={player.datas.games.draws}
              playerName={player.datas.name}
              playerColor={player.color}
            />)
          }
        </div>
      </div>
  	)
  }
}

export default WinratePieList
