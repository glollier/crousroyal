import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import Stat from './components/Stat';
import { Provider } from 'react-redux'
import Store from './store/configureStore'

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Router>
            <Route path="/" exact component={LandingPage} />
            <Route path="/Stats" component={Stat} />
        </Router>
      </Provider>
    );
  }
}

export default App;
