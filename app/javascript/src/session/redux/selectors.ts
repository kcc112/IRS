import { createSelector } from 'reselect';

import { AppState } from '../../store/reducer';
import { CurrentUser } from './types';

export const selectCurrentUser = createSelector<AppState, CurrentUser | undefined, CurrentUser | undefined>(
  state => state.session.entities.currentUser,
  currentUser => currentUser
);
