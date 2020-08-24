import { combineReducers } from 'redux';

import enterprises from '../components/enterprises/redux/reducer';

export const rootReducer = combineReducers({
  enterprises
});

export type AppState = ReturnType<typeof rootReducer>;