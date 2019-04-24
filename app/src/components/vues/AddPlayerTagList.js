import React, { Component } from 'react';
import AddPlayerTagCard from './AddPlayerTagCard';

class AddPlayerTagList extends Component {
  render() {
    return (
      this.props.players.map( player =>
        <AddPlayerTagCard
          key={player.key}
          player={player}
          removePlayer = { this.props.removePlayer }
          onChangeHandler = {this.props.onChangeHandler}
        />
      )
    )
  }
}

export default AddPlayerTagList
