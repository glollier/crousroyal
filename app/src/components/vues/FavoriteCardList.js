import React, { Component } from 'react';
import FavoriteCard from './FavoriteCard'

class FavoriteCardList extends Component {
  render() {
  	return (
      <div className="listContainer">
        {
          this.props.players.map(player =>
            <FavoriteCard
              key={player.datas.name}
              playerName={player.datas.name}
              playerColor={player.color}
              favoriteCard={player.datas.stats.favoriteCard}
            />
          )
        }
      </div>

  	)
  }
}

export default FavoriteCardList
