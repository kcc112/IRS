import { combineReducers } from 'redux';

import enterprises from '../components/enterprises/redux/reducer';
import session from '../session/redux/reducer';
import meta from '../components/app/redux/reducer';

export const rootReducer = combineReducers({
  enterprises,
  session,
  meta
});

export type AppState = ReturnType<typeof rootReducer>;