import React, { Component } from 'react';

import Header from  '../header/Header';
import About from '../about/About';
import Features from '../features/Features';
import Pricing from '../pricing/Pricing';
import Reviews from '../reviews/Reviews';
import Footer from '../footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <About />
          <Features />
          <Pricing />
          <Reviews />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
