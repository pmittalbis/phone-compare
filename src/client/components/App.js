import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BrandsWithData from '../containers/BrandsWithData.js';
import Header from './Header.js';
import Footer from './Footer.js';
import PhoneListWithData from '../containers/PhoneListWithData.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <ToastContainer />
          <Header />
          <BrandsWithData />
          <PhoneListWithData />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
