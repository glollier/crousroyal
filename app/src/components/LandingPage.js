import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddPlayerTagList from './vues/AddPlayerTagList';
import {addPlayer, removePlayer, onChangeHandler, setRequest, addDatas, setPlayers, setPlayersColors, setPlayersValidity} from '../actions/playerManager'
import AddPlayer from './vues/AddPlayer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/LandingPage.css';
import Header from './vues/Header'
import Footer from './vues/Footer'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU0MiwiaWRlbiI6IjIxMTEyODAyNTQxMDk2MTQxMCIsIm1kIjp7fSwidHMiOjE1NTYwMjQ1Njc2MDl9.a1Dd43GVTcwJhuhtyqIHH5jKPNaIBBnlsriA40d5xjk'

class LandingPage extends Component {
  fetcher(){
		let toFetch = 'https://api.royaleapi.com/player/' + this.props.request
    fetch(toFetch, {
			headers:{
				'auth' : token
			}})
		.then(result =>{
      if (!result.ok) {
          throw Error(result.statusText);
      }
      else {
        this.props.setPlayersValidity(true)
      }
			return result.json()
		})
		.then(data =>{
			data.map(player => this.props.addDatas(player))
		})
    .then(() => {
      this.props.setPlayersColors()
    })
    .then(() =>{
      this.props.history.push('/Stats')
    })
    .catch(() => {
      this.props.setPlayersValidity(false)
    })
	}
  setDatas(){
    fetch('https://api.royaleapi.com/player/QGUPYVY9,P9VCCCJJ2', {
      headers:{
        'auth' : token
      }})
    .then(result =>{
      return result.json()
    })
    .then(data =>{
      this.props.setPlayersValidity(true)
      data.map(player => this.props.addDatas(player))
    })
  }
  render() {
    return (
      <div >
        <Header />
        <div className="d-flex flex-column justify-content-center align-items-center content">
          <span>
            Compare tes stats !
          </span>
          <form className="text-center" onClick={(e) => e.preventDefault()}>
            <AddPlayerTagList
              players={this.props.players}
              removePlayer = { this.props.removePlayer }
              onChangeHandler = { this.props.onChangeHandler }
            />
            <AddPlayer
              addPlayer = { this.props.addPlayer }
            />
            {this.props.displayError ? <div className="ErrorMessage">Les NameTags ne sont pas valides !</div> : null}
            <button className="versus" onClick={(e) => {
              this.props.setRequest()
              setTimeout(() => {
                this.fetcher()
              }, 50);
            }}>
              Versus !
            </button>
            <div><button className="versus" onClick={(e) => {
              this.props.setPlayers()
              this.props.setPlayersColors()
              this.props.setRequest()
              setTimeout(() => {
                  this.setDatas()
              }, 100);
              setTimeout(() => {
                this.props.history.push('/Stats')
              }, 1500);
            }}>
              Setup Rapide
            </button></div>
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

const mapDispatchToProps = (dispatch) => ({
  addPlayer: () => dispatch(addPlayer()),
  setRequest: () => dispatch(setRequest()),
  removePlayer: (key) => dispatch(removePlayer(key)),
  onChangeHandler: (props) => dispatch(onChangeHandler(props)),
  addDatas: (props) => dispatch(addDatas(props)),
  setPlayersValidity: (bool) => dispatch(setPlayersValidity(bool)),
  setPlayers: () => dispatch(setPlayers()),
  setPlayersColors: () => dispatch(setPlayersColors())
})

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
