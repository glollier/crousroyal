import React, { Component } from 'react';
import { Nav } from 'react-bootstrap'
import { connect, } from 'react-redux'
import { withRouter } from "react-router";


class Header extends Component {
  render(){
    return(
      <div>
      <Nav className="header d-flex align-items-center">
      {
        this.props.location.pathname !== "/"
        ? <img alt="return" src="https://image.flaticon.com/icons/svg/118/118739.svg" className="return" onClick={(e) => {
            this.props.history.push('/')
          }} />
        : null
      }
        <div className="d-flex justify-content-center align-items-center w-100">
          <h1>CROUS <span>ROYALE</span></h1>
        </div>
      </Nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default withRouter(connect(mapStateToProps)(Header))
