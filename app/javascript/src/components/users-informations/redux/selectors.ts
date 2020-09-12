import { createSelector } from 'reselect';

import { AppState } from '../../../store/reducer';
import {
  UsersInformationsIndex,
  UserInformationsShow,
  UserInformationsEvent,
} from './types';

export const selectUsersInformations = createSelector<AppState, UsersInformationsIndex[], UsersInformationsIndex[]>(
  state => state.usersInformations.entities.usersInformations,
  usersInformations => usersInformations
);

export const selectUserInformations  = createSelector<AppState, UserInformationsShow | undefined, UserInformationsShow | undefined>(
  state => state.usersInformations.entities.userInformations,
  userInformations => userInformations
);

export const selectUserInformationsEvent = createSelector<AppState, UserInformationsEvent[], UserInformationsEvent[]>(
  state => state.usersInformations.eventAccumulator,
  eventAccumulator => eventAccumulator
);