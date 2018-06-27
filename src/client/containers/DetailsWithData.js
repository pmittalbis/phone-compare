import Details from '../components/Details.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchDetails } from '../actions/actions.js';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchDetails,
  }, dispatch);
}

function mapStateToProps(state) {
  debugger;
  return {
    details: state.Phones.phoneDetails,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
