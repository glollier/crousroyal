import React, { Component } from 'react';

class PlayerName extends Component {
  render() {
  	return (
      <div style={{color:this.props.playerColor}} className="pseudo">
        {this.props.playerName}
      </div>
  	)
  }
}

export default PlayerName
