import React, { Component } from 'react';

import './App.css';

import Nav from '../nav/Nav';
import Header from  '../header/Header';
import About from '../about/About';
import Features from '../features/Features';
import Pricing from '../pricing/Pricing';
import Reviews from '../reviews/Reviews';
import Footer from '../footer/Footer';
import Popup from '../popup/PopUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <main>
          <About />
          <Features />
          <Pricing />
          <Reviews />
        </main>
        <Footer />
        <Popup />
      </div>
    );
  }
}

export default App;
