import React, { Component } from 'react';
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import AboutMe from './components/AboutMe'
import './App.css';
import GetInTouch from './components/GetInTouch';
import WhatIDo from './components/WhatIDo';

class App extends Component {
  onLeave(origin, destination, direction) {
  }
  afterLoad(origin, destination, direction) {
  }
  render() {
    return (
        <ReactFullpage
          navigation={true}
          scrollOverflow={true}
          sectionsColor={['#492378', '#7638C2', '#9C4AFF']}
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">
                <div className="section section1">
                  <AboutMe />
                </div>
                <div className="section section1">
                  <WhatIDo />
                </div>
                <div className="section">
                  <GetInTouch />
                  <button onClick={() => fullpageApi.moveTo(1, 0)}>
                    Move top
                  </button>
                </div>
              </div>
            );
          }}
        />
      );
    }
  }

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
