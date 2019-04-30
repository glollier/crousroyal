import React, { Component } from 'react';
import PlayerName from './PlayerName'

class VersusDisplayer extends Component {
  render() {
  	return (
      <div className="versusContainer">
        {this.props.players.map(player =>
          <PlayerName
            key={player.datas.name}
            playerName={player.datas.name}
            playerColor={player.color}
          />
        )}
        <div className="link">
          VS
        </div>
      </div>
  	)
  }
}


export default VersusDisplayer
