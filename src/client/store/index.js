import { createStore, applyMiddleware } from 'redux';
import rootSaga from '../sagas/sagas.js';
import createSagaMiddleware from 'redux-saga';
import RootReducer from '../reducers/index.js';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  RootReducer,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);

export default store;
