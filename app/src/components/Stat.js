import React, { Component } from 'react';
import { connect } from 'react-redux'

class Stat extends Component {
  render() {
    return (
      <div>
        {"Stat.js"}
      </div>
      )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Stat)
