import { combineReducers } from 'redux';

import enterprises from '../components/enterprises/redux/reducer';
import session from '../session/redux/reducer';

export const rootReducer = combineReducers({
  enterprises,
  session
});

export type AppState = ReturnType<typeof rootReducer>;