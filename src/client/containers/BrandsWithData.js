import Brands from '../components/Brands.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveBrandsToStore } from '../actions/actions.js';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    saveBrandsToStore,
  }, dispatch);
}

function mapStateToProps(state) {
  debugger;
  return {
    brands: state.Phones.brands,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Brands);
