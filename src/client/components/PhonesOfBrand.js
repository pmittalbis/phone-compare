import React, { Component } from 'react';
import CompareArea from '../components/CompareArea.js';
import { Link } from 'react-router-dom';

class PhonesOfBrand extends Component {
  componentWillMount() {
    debugger;
    // const brandPhones = this.props.fetchBrandPhones(this.props.match.params.id);
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
      </div>
    );
  }
}

export default PhonesOfBrand;
