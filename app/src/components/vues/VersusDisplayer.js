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
        {
          this.props.playerNumber > 1
          ? <div className="link">
              VS
            </div>
          : null
        }

      </div>
  	)
  }
}


export default VersusDisplayer
