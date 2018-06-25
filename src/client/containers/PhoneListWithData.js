import PhoneList from '../components/PhoneList.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addToCompare, removeFromCompare } from '../actions/actions.js';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addToCompare,
    removeFromCompare,
  }, dispatch);
}

function mapStateToProps(state) {
  debugger;
  return {
    phones: state.Phones.phones,
    compareList: state.Phones.compareList,
  }
}

// const PhoneListWithData = 
export default connect(mapStateToProps, mapDispatchToProps)(PhoneList);
 // PhoneListWithData;
