import { ADD_TO_COMPARE, REMOVE_FROM_COMPARE } from '../constants/ActionTypes.js';

export function addToCompare(payload) {
  debugger;
  return {
    type: ADD_TO_COMPARE,
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
