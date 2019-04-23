import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddPlayerTagList from './vues/AddPlayerTagList';
import {addPlayer, removePlayer, onChangeHandler} from '../actions/playerManager'
import AddPlayer from './vues/AddPlayer';
import { Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <AddPlayer
          removePlayer = { removePlayer.bind(this) }
          addPlayer = { addPlayer.bind(this) }
        />

        <form onSubmit={(e) => {e.preventDefault(); }}>

          <AddPlayerTagList
            players={this.props.players}
            onChangeHandler = { onChangeHandler.bind(this) }
          />
          {console.log(this.props.players)}
          <Link to="/Stats">
            <input type="submit" name="nametag" required />
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(LandingPage)
