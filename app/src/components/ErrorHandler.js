import React, { Component } from 'react';

class ErrorHandler extends Component {
  constructor() {
    super()
    this.state = { hasError: false }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {
    {console.log(this.state.hasError)}
    return this.state.hasError ? <h1>Something went wrong.</h1> : <h1>good.</h1>;
  }
}

export default ErrorHandler
