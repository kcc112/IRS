import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { loggers } from 'redux-act';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './reducer';
import { rootSaga } from './sagas';

let initialState: any = {};

const logger = createLogger({
  ...loggers.reduxLogger,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

export default store;