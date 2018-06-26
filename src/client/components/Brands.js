import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Brands extends Component {
  componentWillMount() {
    debugger;
    axios.get('http://localhost:5000/brands')
     .then((data) => {
        this.props.saveBrandsToStore(data.data);
    });
  }

  render() {
    return (
      <div className="container">
        {
          this.props.brands.map((brand) => {
            return <Link to={`/brand/${brand._id}`}><p>{brand.name}</p></Link>
          })
        }
      </div>
    );
  }
}

export default Brands;
