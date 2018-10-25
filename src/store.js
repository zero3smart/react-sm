import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const middleware = [
    sagaMiddleware
];

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
);

sagaMiddleware.run(sagas);

export default store;