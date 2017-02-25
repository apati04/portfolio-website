import React, { Component } from 'react';
import Landing from './components/Landing';
import Home from './components/Home';
import About from './components/About';
class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        <Home />
        <About />
      </div>
    );
  }
}

export default App;
