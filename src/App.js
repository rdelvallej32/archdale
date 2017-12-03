import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Footer from './components/footer/'

const footerItems = [
  {
    id: 1,
    text: '617-323-8649',
  }, {
    id: 2,
    text: 'archdaleliquors@verizon.net'
  }, {
    id: 3, 
    text: '3999A Washington St. Roslindale, MA 02131'
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer
          items={footerItems}
          copyright='Archdale Liquors, All Rights Reserved'
        />
      </div>
    );
  }
}

export default App;
