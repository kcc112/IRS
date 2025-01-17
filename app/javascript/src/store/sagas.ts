import { all } from 'redux-saga/effects';

import { watchEnterprisesIndex } from '../components/enterprises/index/sagas';
import { watchSession } from '../session/sagas';
import { watchEnterpriseCreateEdit } from '../components/enterprises/create-edit/sagas';
import { watchEnterpriseDelete } from '../components/enterprises/delete/sagas';
import { watchEnterpriseShow } from '../components/enterprises/show/sagas';
import { watchUsersInformationsIndex } from '../components/users-informations/index/sagas';
import { watchUserInformationsEdit } from '../components/users-informations/edit/sagas';
import { watchIssuesIndex } from '../components/issues/index/sagas';
import { watchIssueCreateEdit } from '../components/issues/create-edit/sagas';
import { watchAssignToIssue } from '../components/issues/assign/sagas';
import { watchResolveIssue } from '../components/issues/resolve/sagas';
import { watchIssueShow } from '../components/issues/show/sagas';
import { watchCommentsList } from '../components/comments/comments-list/sagas';
import { watchCommentCreateEdit } from '../components/comments/create-edit/sagas';
import { watchCommentDelete } from '../components/comments/delete/sagas';
import { watchUserActivateDeactivate } from '../components/users/activate-deactivate/sagas';
import { watchAssignUserToEnterprise } from '../components/users/assign/sagas';

export function* rootSaga() {
  yield all([
    watchEnterprisesIndex(),
    watchSession(),
    watchEnterpriseCreateEdit(),
    watchEnterpriseDelete(),
    watchEnterpriseShow(),
    watchUsersInformationsIndex(),
    watchUserInformationsEdit(),
    watchIssuesIndex(),
    watchIssueCreateEdit(),
    watchAssignToIssue(),
    watchResolveIssue(),
    watchIssueShow(),
    watchCommentsList(),
    watchCommentCreateEdit(),
    watchCommentDelete(),
    watchUserActivateDeactivate(),
    watchAssignUserToEnterprise(),
  ]);
}