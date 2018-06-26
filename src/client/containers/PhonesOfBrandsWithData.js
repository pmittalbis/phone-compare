import PhonesOfBrand from '../components/PhonesOfBrand.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchBrandPhones } from '../actions/actions.js';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchBrandPhones,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(PhonesOfBrand);
