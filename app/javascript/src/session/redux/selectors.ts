import { createSelector } from 'reselect';

import { AppState } from '../../store/reducer';
import { CurrentUser, Role } from './types';

export const selectCurrentUser = createSelector<AppState, CurrentUser | undefined, CurrentUser | undefined>(
  state => state.session.entities.currentUser,
  currentUser => currentUser
);

export const selectRoles = createSelector<AppState, Role[], Role[]>(
  state => state.session.entities.roles,
  roles => roles
);
