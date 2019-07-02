import React, { Component } from 'react';
import './App.css';
import AboutMe from './components/AboutMe'

class App extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
        <AboutMe />
        </div>
      </div>
    );
  }
}

export default App;
