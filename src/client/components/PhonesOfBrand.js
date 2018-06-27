import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class PhonesOfBrand extends Component {
  componentWillMount() {
    debugger;
    this.props.fetchBrandPhones(this.props.match.params.brandId);
  }
  render() {
    debugger;
    console.log(this.props.brands);
    return (
      <div className="list container" id="Home">
      <Header />
        {
          this.props.filteredPhones.map(phone => {
            return (
              <div key={phone._id} className='col-md-3 text-center'>
                <h4><strong>{phone.name}</strong></h4>
                <Link to={`/model/${phone._id}`}><img src={phone.image} className='img' alt={phone.model} title={phone.model}/></Link>
                <p className='para'><strong>Description: </strong><span>{phone.description}</span></p>
              </div>
            )
          })
        }
      <Footer />
      </div>
    );
  }
}

export default PhonesOfBrand;
