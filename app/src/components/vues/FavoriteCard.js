import React, { Component } from 'react';
import Card from './Card'
import PlayerName from './PlayerName'

class FavoriteCard extends Component {
  render() {
  	return (
      <div>
        <PlayerName
          playerName={this.props.playerName}
          playerColor={this.props.playerColor}
        />
        <Card
          name = {this.props.favoriteCard.name}
          icon = {this.props.favoriteCard.icon}
          elixir = {this.props.favoriteCard.elixir}
        />
      </div>
  	)
  }
}

export default FavoriteCard
