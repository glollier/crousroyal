import React, { Component } from 'react';
import CurrentDeck from './CurrentDeck'

class CurrentDeckList extends Component {
  render() {
  	return (
        <div className="listContainer">
          {
            this.props.players.map(player =>
            <CurrentDeck
              key={player.datas.name}
              playerName={player.datas.name}
              playerColor={player.color}
              currentDeck={player.datas.currentDeck}
            />)
          }
        </div>
  	)
  }
}

export default CurrentDeckList
