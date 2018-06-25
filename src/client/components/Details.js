import React, { Component } from 'react';
import './App.css';

class Details extends Component {
  render() {
    return(
      <div>
        <h1>
          Details Component
        </h1>
      </div>
    )
    // return(
    //   <div className="details text-center">
    //   {
    //     this.props.phone.map(phone => {
    //       return(
    //         <div key={phone.id} className='col-md-6 text-center'>
    //           <h4><strong>{phone.model}</strong></h4>
    //           <img src={phone.image} className='bigImg' alt={phone.model} title={phone.model} />
    //           <p>Release date: {phone[ 'Release date' ]}</p>
    //           <p>Form factor: {phone[ 'Form factor' ]}</p>
    //           <p>Screen size (inches): {phone[ 'Screen size (inches)' ]}</p>
    //           <p>Touchscreen: {phone[ 'Touchscreen' ]}</p>
    //           <p>Resolution: {phone[ 'Resolution' ]}</p>
    //           <p>Expandable storage: {phone[ 'Expandable storage' ]}</p>
    //           <p>Expandable storage type: {phone[ 'Expandable storage type' ]}</p>
    //           <p>Rear camera: {phone[ 'Rear camera' ]}</p>
    //           <p>Rear Flash: {phone[ 'Rear Flash' ]}</p>
    //           <p>Front camera: {phone[ 'Front camera' ]}</p>
    //           <p>Operating System: {phone[ 'Operating System' ]}</p>
    //           <p>Wi-Fi: {phone[ 'Wi-Fi' ]}</p>
    //           <p>Bluetooth: {phone[ 'Bluetooth' ]}</p>
    //           <button className='btn btn-warning btn-md' onClick={this.props.remove.bind(this, phone)}>Remove</button>
    //         </div>
    //       )
    //     })
    //   }
    //   </div>
    // )
  }
}

export default Details;
