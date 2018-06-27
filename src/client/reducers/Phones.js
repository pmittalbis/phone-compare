import {
    ADD_TO_COMPARE,
    FETCH_BRAND_PHONES,
    REMOVE_FROM_COMPARE,
    SAVE_BRANDS_TO_STORE,
    SAVE_DETAILS_TO_STORE,
    SAVE_PHONES_TO_STORE,
} from '../constants/ActionTypes.js';
import { toast } from 'react-toastify';

var compareList = [];
var brands = [];
var phones = [];
var brandPhones = [];
var phoneDetails = [];
export const Phones = (state = { brands, phones, compareList, brandPhones, phoneDetails } , action) => {
  function notify(msg) {
    toast(msg);
  }
  switch(action.type) {
    case ADD_TO_COMPARE:
      if (state.compareList.length === 2) {
        return notify('You can compare 2 phones at once!');
      } else if (state.compareList.includes(action.payload)) {
        return notify('You are trying to compare same phone!')
      }
      var temp = [...state.compareList];
      temp.push(action.payload);
        return {
          ...state,
          compareList: temp,
      }

    case FETCH_BRAND_PHONES:
      debugger;
      temp = [...state.phones];
      let filteredPhones = temp.filter(phone => phone.brandId === action.brandId);
      console.log(filteredPhones);
      return {
        ...state,
        brandPhones: filteredPhones,
      }

    case REMOVE_FROM_COMPARE:
      temp = [...state.compareList];
      var index = temp.indexOf(action.payload);
      temp.splice(index, 1);
      return {
        ...state,
        compareList: temp,
      }
      
    case SAVE_BRANDS_TO_STORE:
      debugger;
      temp = action.payload;
      return {
        ...state,
        brands: temp,
      }

    case SAVE_DETAILS_TO_STORE:
    debugger;
    temp = action.details.data;
      return {
        ...state,
        phoneDetails: temp,
      }

    case SAVE_PHONES_TO_STORE:
    debugger;
    temp = action.phones.data;
      return {
        ...state,
        phones: temp,
      }

    default:
      return state;
  }
}
