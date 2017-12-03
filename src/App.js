import React, { Component } from 'react';
import logo from './static/nav/hamburger-menu.svg';
import phone from './static/nav/phone.svg';
import envelope from './static/nav/envelope.svg';
import './App.css';

import Nav from './components/nav/'
import Footer from './components/footer/'

const icons = [
  <img src={envelope} />,
  <img src={phone} />
];
const menu = [
  <img src={logo} />
];

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
        <Nav
          title="Archdale Liqours"
          leftButtons={menu}
          rightButtons={icons}
        />
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
