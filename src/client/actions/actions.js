import { ADD_TO_COMPARE,
  FETCH_BRAND_PHONES,
  REMOVE_FROM_COMPARE,
  SAVE_BRANDS_TO_STORE,
  SAVE_PHONES_TO_STORE,
} from '../constants/ActionTypes.js';

export function addToCompare(payload) {
  return {
    type: ADD_TO_COMPARE,
    payload
  }
}

export function fetchBrandPhones(brandId) {
  return {
    type: FETCH_BRAND_PHONES,
    brandId
  }
}

export function saveBrandsToStore(payload) {
  return {
    type: SAVE_BRANDS_TO_STORE,
    payload
  }
}

export function savePhonesToStore(payload) {
  debugger;
  return {
    type: SAVE_PHONES_TO_STORE,
    payload
  }
}

export function removeFromCompare(payload) {
  debugger;
  return {
    type: REMOVE_FROM_COMPARE,
    payload
  }
}
