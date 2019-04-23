import React, { Component } from 'react';

class AddPlayerTagCard extends Component {

  render() {
    return (
      <div>
        <input type="text" value={this.props.player.nameTag} onChange={e => this.props.onChangeHandler({value: e.target.value, id: this.props.player.key})} name={"player" + this.props.player.key} maxLength="9"/>
      </div>
    )
  }
}

export default AddPlayerTagCard
