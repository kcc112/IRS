import { all } from 'redux-saga/effects';

import { watchEnterprisesIndex } from '../components/enterprises/index/sagas';

export function* rootSaga() {
  yield all([
    watchEnterprisesIndex(),
  ]);
}