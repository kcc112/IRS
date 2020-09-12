import { combineReducers } from 'redux';

import enterprises from '../components/enterprises/redux/reducer';
import session from '../session/redux/reducer';
import meta from '../components/app/redux/reducer';
import usersInformations from '../components/users-informations/redux/reducer';

export const rootReducer = combineReducers({
  enterprises,
  usersInformations,
  session,
  meta,
});

export type AppState = ReturnType<typeof rootReducer>;