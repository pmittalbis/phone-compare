import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="navbar navbar-inverse">
        <div className='navbar-header'>
          <Link className='navbar-brand' to={'/'}>Phone Compare</Link>
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
