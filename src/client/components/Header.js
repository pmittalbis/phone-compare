import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="navbar navbar-inverse">
        <div className='navbar-header'>
          <a className='navbar-brand' href='#'>Phone Compare</a>
        </div>
        <ul className='nav navbar-nav'>
          <li className='active'><a href='#Home'>Home</a></li>
          <li><a href='#about-us'>About us</a></li>
        </ul>
      </div>
    );
  }
}

export default Header;
