import { all } from 'redux-saga/effects';

import { watchEnterprisesIndex } from '../components/enterprises/index/sagas';
import { watchSession } from '../session/sagas';

export function* rootSaga() {
  yield all([
    watchEnterprisesIndex(),
    watchSession(),
  ]);
}