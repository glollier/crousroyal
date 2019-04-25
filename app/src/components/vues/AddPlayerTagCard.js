import React, { Component } from 'react';

class AddPlayerTagCard extends Component {

  render() {
    return (
      <div className="tagCard">
        {this.props.player.key !== 1 ? <div className="vs">VS</div> : null}
        <input type="text" value={this.props.player.nameTag} onChange={e => this.props.onChangeHandler({value: e.target.value, id: this.props.player.key})} name={"player" + this.props.player.key} maxLength="9" placeholder="Tag : QGUPYVY9"/>
        {this.props.player.key !== 1 ? <button onClick={() => this.props.removePlayer(this.props.player.key)}>X</button> : null}
      </div>
    )
  }
}

export default AddPlayerTagCard
