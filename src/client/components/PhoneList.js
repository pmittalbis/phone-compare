import React, { Component } from 'react';
import axios from 'axios';
import CompareArea from '../components/CompareArea.js';
import { Link } from 'react-router-dom';

class PhoneList extends Component {
  componentWillMount() {
    debugger;
    axios.get('http://localhost:5000/phones')
     .then((data) => {
        this.props.savePhonesToStore(data.data);
    });
  }

  render() {
    debugger;
    console.log(this.props.brands);
    return (
      <div className="list" id="Home">
        {
          this.props.phones.map(phone => {
            return (
              <div key={phone.id} className='col-md-3 text-center'>
                <h4><strong>{phone.model}</strong></h4>
                <Link to={`/model/${phone.id}`}><img src={phone.image} className='img' alt={phone.model} title={phone.model}/></Link>
                <p>Release date: {phone[ 'Release date' ]}</p>
                <button className='btn btn-info btn-md' onClick={this.props.addToCompare.bind(this, phone)}>Add To Compare</button>
              </div>
            )
          })
        }
        <CompareArea remove={this.props.removeFromCompare} compareList={this.props.compareList}/>
        <div id="about-us">
          <h2>About us:</h2>
          <h3>BestPeers Infosystem Pvt. Ltd.</h3>
          <p>401, 402 Shagun Tower</p>
          <p>Vijay nagar, Indore (452003)</p>
        </div>
      </div>
    );
  }
}

export default PhoneList;
