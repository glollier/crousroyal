import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddPlayerTagList from './vues/AddPlayerTagList';
import {addPlayer, removePlayer, onChangeHandler, setRequest} from '../actions/playerManager'
import AddPlayer from './vues/AddPlayer';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/LandingPage.css';
import Header from './vues/Header'
import Footer from './vues/Footer'

class LandingPage extends Component {
  render() {
    return (
      <div >
        <Header />
        <div className="d-flex flex-column justify-content-center align-items-center content">
          <span>
            Compare tes stats !
          </span>
          <form className="text-center" onSubmit={(e) => {e.preventDefault();} }>
            <AddPlayerTagList
              players={this.props.players}
              removePlayer = { removePlayer.bind(this) }
              onChangeHandler = { onChangeHandler.bind(this) }
            />
            <AddPlayer
              addPlayer = { addPlayer.bind(this) }
            />
            {setRequest.bind(this)()}
            <Link className="versus" to="/Stats">
              <input type="submit" name="nametag" value="Versus !" required />
            </Link>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(LandingPage)
