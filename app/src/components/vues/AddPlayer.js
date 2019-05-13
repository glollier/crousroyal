import React, { Component } from 'react';

class AddPlayer extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.addPlayer}>+</button>
      </div>
    )
  }
}

export default AddPlayer
