import { createStore } from 'redux';
import RootReducer from '../reducers/index.js';

const store = createStore(RootReducer);

export default store;
