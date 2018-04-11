import React, { Component } from 'react';

import Header from  '../header/Header';
import About from '../about/About';
import Features from '../features/Features';
import Tours from '../tours/Tours';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <About />
          <Features />
          <Tours />
        </main>
      </div>
    );
  }
}

export default App;
