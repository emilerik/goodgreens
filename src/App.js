import React from 'react';
import './App.css';
import 'tachyons'
import greens from "./assets/GoodGreens-logo-v2.png"
import icons from "./assets/GoodGreens-icons.png"

function App() {
  return (
    <div className="App">
      <header className="App-header tc">
          <h1><a href="/">
              GoodGreens
          </a></h1>
      </header>
      <section className="main-container">
          <section className="intro">
              <img className="greens" src={greens} alt="greens"/>
              <h1 className="intro-text">EDIBLE MICROGREENS IN YOUR HOME.</h1>
          </section>
          <section className="icons-section flex flex-column justify-center items-center">
              <div className="icons">
                  <img className="" src={icons} alt="icons"/>
              </div>
          </section>
          <section className="contact">
              <div className="contact-items">
              <h1 className="intro-text ma3">Interested? Subscribe to our newsletter!</h1>
              <div className="">
                  <div className="ui huge input ph3 block">
                      <input type="text" name="email_address" data-validate="email" placeholder="E-mail"/>
                  </div>
                  <button type="submit" value="Subscribe" className="br2 temp pa3 pointer white f3 subscribe-btn">
                      Sign-up
                  </button>
              </div>
              </div>
          </section>
      </section>
    </div>
  );
}

export default App;
