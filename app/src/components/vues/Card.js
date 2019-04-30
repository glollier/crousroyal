import React, { Component } from 'react';

class Card extends Component {
  render() {
  	return (
      <div>
        <div className="cardPictureContainer">
          <div className="cardPicture">
            <img className="card" src={this.props.icon} alt={this.props.name} />
            <div className="elixirInfos">
              <img className="elixir" src="https://www.wikiclashroyale.fr/wp-content/uploads/2016/03/elixir-clash-royale.png" alt="elixir" />
              <div className="elixirValue">{this.props.elixir}</div>
            </div>
          </div>
        </div>
        <div className="cardName">
          {this.props.name}
        </div>
      </div>
  	)
  }
}

export default Card
