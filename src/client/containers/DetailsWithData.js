import Details from '../components/Details.js';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    phones: state.Phones.phones,
  }
}

export default connect(mapStateToProps, null)(Details);
