import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          <h2 className="Header">RR3O</h2>
          <button
          className="Header-button"
          >Tour </button>
          <button
          className="Header-button"
          >Gallery </button>
          <button
          className="Header-button"
          >Bio </button>
          <button
          className="Header-button"
          >Contact </button>
          <div className="Blank"></div>
          </div>
    );
  }
}

export default Header;