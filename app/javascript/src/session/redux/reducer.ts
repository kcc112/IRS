import { createReducer } from 'redux-act';

import { SessionState } from './types';
import {
  rolesFetchSuccesfull,
  currentUserFetchSuccesfull,
} from './actions';

const initialState: SessionState = {
  entities: {
    currentUser: undefined,
    roles: [],
  },
};

const session = createReducer<SessionState>({}, initialState);

session.on(rolesFetchSuccesfull, (state, roles) => ({
  ...state,
  entities: {
    ...state.entities,
    roles,
  },
}));

session.on(currentUserFetchSuccesfull, (state, currentUser) => ({
  ...state,
  entities: {
    ...state.entities,
    currentUser,
  },
}));

export default session;