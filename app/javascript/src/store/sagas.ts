import { all } from 'redux-saga/effects';

import { watchEnterprisesIndex } from '../components/enterprises/index/sagas';
import { watchSession } from '../session/sagas';
import { watchEnterpriseCreateEdit } from '../components/enterprises/create-edit/sagas';
import { watchEnterpriseDelete } from '../components/enterprises/delete/sagas';
import { watchEnterpriseShow } from '../components/enterprises/show/sagas';
import { watchUsersInformationsIndex } from '../components/users-informations/index/sagas';

export function* rootSaga() {
  yield all([
    watchEnterprisesIndex(),
    watchSession(),
    watchEnterpriseCreateEdit(),
    watchEnterpriseDelete(),
    watchEnterpriseShow(),
    watchUsersInformationsIndex(),
  ]);
}