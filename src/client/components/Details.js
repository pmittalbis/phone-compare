import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import './App.css';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneDetails: null,
    }
  }

  componentWillMount() {
    debugger;
    const id = Number(this.props.match.params.id);
    const phone = this.props.phones.find(function(phone) {
      return phone.id === id;
    });
    this.setState({
      phoneDetails: phone,
    });    
  }

  render() {
    const phone = this.state.phoneDetails;
    return(
      <div className="container details text-center">
        <Header />
        <div key={phone.id} className='content center-block'>
          <h3><strong>{phone.model}</strong></h3>
          <img src={phone.image} className='bigImg' alt={phone.model} title={phone.model} />
          <h4><strong>{phone.model} Full specification</strong></h4>
          <h5><strong>GENERAL:</strong></h5>
          <p><strong>Release date:</strong> {phone[ 'Release date' ]}</p>
          <p><strong>Form factor:</strong> {phone[ 'Form factor' ]}</p>
          <p><strong>Weight (g): </strong>{phone[ 'Weight (g)' ]}</p>
          <p><strong>Battery capacity (mAh): </strong>{phone[ 'Battery capacity (mAh)' ]}</p>
          <h5><strong>DISPLAY:</strong></h5>
          <p><strong>Screen size </strong>(inches): {phone[ 'Screen size (inches)' ]}</p>
          <p><strong>Touchscreen: </strong>{phone[ 'Touchscreen' ]}</p>
          <p><strong>Resolution: </strong>{phone[ 'Resolution' ]}</p>
          <h5><strong>HARDWARE:</strong></h5>
          <p><strong>RAM: </strong>{phone[ 'RAM' ]}</p>
          <p><strong>Expandable storage:</strong> {phone[ 'Expandable storage' ]}</p>
          <p><strong>Expandable storage type:</strong>type: {phone[ 'Expandable storage type' ]}</p>
          <h5><strong>HARDWARE:</strong></h5>
          <p><strong>Front camera:</strong> {phone[ 'Front camera' ]}</p>
          <p><strong>Rear camera:</strong> {phone[ 'Rear camera' ]}</p>
          <p><strong>Rear Flash:</strong> {phone[ 'Rear Flash' ]}</p>
          <h5><strong>SOFTWARE:</strong></h5>
          <p><strong>Operating System:</strong> {phone[ 'Operating System' ]}</p>
          <h5><strong>CONNECTIVITY:</strong></h5>
          <p><strong>Wi-Fi:</strong> {phone[ 'Wi-Fi' ]}</p>
          <p><strong>Bluetooth: </strong>{phone[ 'Bluetooth' ]}</p>
          <p><strong>Number of SIMs: </strong>{phone[ 'Number of SIMs' ]}</p>
          <h5><strong>SIM 1: </strong></h5>
          <p><strong>SIM Type: </strong>{phone[ 'SIM Type' ]}</p>
          <p><strong>GSM/CDMA: </strong>{phone[ 'GSM/CDMA' ]}</p>
          <h5><strong>SIM 2: </strong></h5>
          <h5><strong>SENSORS:</strong></h5>
          <p><strong>Gyroscope: </strong>{phone[ 'Gyroscope' ]}</p>
          <p><strong>Proximity sensor: </strong>{phone[ 'Proximity sensor' ]}</p>
          <p><strong>Compass/ Magnetometer: </strong>{phone[ 'Compass/ Magnetometer' ]}</p>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Details;
