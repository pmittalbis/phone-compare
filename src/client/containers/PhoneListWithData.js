import PhoneList from '../components/PhoneList.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  addToCompare,
  removeFromCompare,
  savePhonesToStore,
} from '../actions/actions.js';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addToCompare,
    removeFromCompare,
    savePhonesToStore,
  }, dispatch);
}

function mapStateToProps(state) {
  debugger;
  return {
    phones: state.Phones.phones,
    compareList: state.Phones.compareList,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneList);
