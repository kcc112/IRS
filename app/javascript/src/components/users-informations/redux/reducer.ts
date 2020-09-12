import { createReducer } from 'redux-act';

import { UsersInformationsState } from './types';
import {
  usersInformationsFetchSuccessfully,
  userInformationsFetchSuccessfully,
  usersInformationsClear,
  userInformationsClear,
  removeEventFromAccumulator,
  emitUserInformationsEvent,
} from './actions';

const initialState: UsersInformationsState = {
  entities: {
    usersInformations: [],
    userInformations: undefined,
  },
  eventAccumulator: [],
};

const usersInformations = createReducer<UsersInformationsState>({}, initialState);

usersInformations.on(usersInformationsFetchSuccessfully, (state, usersInformations) => ({
  ...state,
  entities: {
    ...state.entities,
    usersInformations,
  },
}));

usersInformations.on(userInformationsFetchSuccessfully, (state, userInformations) => ({
  ...state,
  entities: {
    ...state.entities,
    userInformations,
  },
}));

usersInformations.on(usersInformationsClear, state => ({
  ...state,
  entities: {
    ...state.entities,
    usersInformations: [],
  },
}));

usersInformations.on(userInformationsClear, state => ({
  ...state,
  entities: {
    ...state.entities,
    userInformations: undefined,
  },
}));

usersInformations.on(removeEventFromAccumulator, (state, newEvent) => ({
  ...state,
  eventAccumulator: state.eventAccumulator.filter(event=> event !== newEvent)
}));

usersInformations.on(emitUserInformationsEvent, (state, event) => ({
  ...state,
  eventAccumulator: [...state.eventAccumulator, event]
}));

export default usersInformations;