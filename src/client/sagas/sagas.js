import { all, takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { ADD_TO_COMPARE,
  // FETCH_BRAND_PHONES,
  FETCH_PHONES,
  FETCH_DETAILS,
  // REMOVE_FROM_COMPARE,
  // SAVE_BRANDS_TO_STORE,
  SAVE_DETAILS_TO_STORE,
  SAVE_PHONES_TO_STORE,
} from '../constants/ActionTypes.js';

export function* getPhonesFromDatabase() {
  yield takeEvery(FETCH_PHONES, savePhonesToStore);
}

function* savePhonesToStore() {
  let phones = yield axios.get('http://localhost:5000/phones', (err, data) => {
    if (err) { return console.log('ERROR ', err); }
    return data.data
  })
  console.log('phones = ', phones);
  yield put({type: SAVE_PHONES_TO_STORE, phones})
}

export function* getDetailFromDatabase() {
  debugger;
  yield takeEvery(FETCH_DETAILS, saveDetailsToStore);
}

function* saveDetailsToStore() {
  let details = yield axios.get('http://localhost:5000/details', (err, data) => {
    if (err) { return console.log('ERROR ', err); }
    console.log('details>>', data.data);
    return data.data
  })
  debugger;
  console.log('details = ', details);
  yield put({type: SAVE_DETAILS_TO_STORE, details})
}

export default function* rootSaga() {
  yield all([
    getDetailFromDatabase(),
    getPhonesFromDatabase(),
  ])
}

