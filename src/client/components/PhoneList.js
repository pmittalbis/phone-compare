import React, { Component } from 'react';
import CompareArea from '../components/CompareArea.js';
import { Link } from 'react-router-dom';

class PhoneList extends Component {
  componentWillMount() {
    debugger;
    this.props.fetchPhones();
  }

  render() {
    debugger;
    return (
      <div className="list" id="Home">
        {
          this.props.phones.slice(0, 12).map(phone => {
            return (
              <div key={phone.name} className='col-md-3 text-center'>
                <Link to={`/model/${phone._id}`}><img src={phone.image} className='img' alt={phone.name} title={phone.name}/></Link>
                <p><strong>{phone.name}</strong></p>
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
