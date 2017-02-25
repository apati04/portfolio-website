import React, { Component } from 'react';
import Landing from './components/Landing';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        <Home />
      </div>
    );
  }
}

export default App;
