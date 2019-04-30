import React, { Component } from 'react';
import Card from './Card'
import PlayerName from './PlayerName'

class CurrentDeck extends Component {
  render() {
  	return (
      <div className="CurrentDeckContainer">
        <PlayerName
          playerName={this.props.playerName}
          playerColor={this.props.playerColor}
        />
        <div className="CardsContainer">
          {
            this.props.currentDeck.map(card =>
              <Card
                key={card.name}
                name={card.name}
                icon={card.icon}
                elixir={card.elixir}
              />
            )
          }
        </div>
      </div>
  	)
  }
}


export default CurrentDeck
