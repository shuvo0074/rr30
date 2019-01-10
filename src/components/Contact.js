import React, { Component } from 'react';
import logo from './logo.svg';
import '../styles/Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Home-body">
          <img src={logo} className='App-logo' alt="Logo RR3O" />
          <p
          className="Body-text"
          >Hello from the other side</p> 
      </div>
    );
  }
}

export default Contact;
