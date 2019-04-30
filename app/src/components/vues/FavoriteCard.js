import React, { Component } from 'react';

class FavoriteCard extends Component {
  render() {
  	return (
      <div>
        <div className="pseudo">
          {this.props.playerName}
        </div>
        <div className="cardPictureContainer">
          <div className="cardPicture">
            <img className="card" src={this.props.favoriteCard.icon} alt={this.props.favoriteCard.name} />
            <div className="elixirInfos">
              <img className="elixir" src="https://www.wikiclashroyale.fr/wp-content/uploads/2016/03/elixir-clash-royale.png" alt="elixir" />
              <div className="elixirValue">{this.props.favoriteCard.elixir}</div>
            </div>
          </div>
        </div>
        {console.log(this.props.favoriteCard)}
        <div className="cardName">
          {this.props.favoriteCard.name}
        </div>
      </div>
  	)
  }
}


export default FavoriteCard
