import React, { Component } from 'react';

class VersusDisplayer extends Component {
  render() {
  	return (
      <div className="versusContainer">
        {this.props.players.map(player =>
          <div className="player" key={player.datas.name}>
            {player.datas.name}
          </div>
        )}
        <div className="link">
          VS
        </div>
      </div>
  	)
  }
}


export default VersusDisplayer
