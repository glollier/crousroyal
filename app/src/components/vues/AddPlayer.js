import React, { Component } from 'react';
import { connect } from 'react-redux'

class AddPlayer extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.addPlayer}>+</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(AddPlayer)
