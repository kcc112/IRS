import { createReducer } from 'redux-act';

import { EnterprisesState } from './types';
import {
  enterprisesFetchSuccessfully,
  enterprisesClear,
  removeEventFromAccumulator,
  emitEnterpriseEvent,
} from './actions';

const initialState: EnterprisesState = {
  entities: {
    enterprises: [],
    enterprise: undefined,
  },
  eventAccumulator: [],
};

const enterprises = createReducer<EnterprisesState>({}, initialState);

enterprises.on(enterprisesFetchSuccessfully, (state, enterprises) => ({
  ...state,
  entities: {
    ...state.entities,
    enterprises,
  },
}));

enterprises.on(enterprisesClear, state => ({
  ...state,
  entities: {
    ...state.entities,
    enterprises: [],
  },
}));

enterprises.on(removeEventFromAccumulator, (state, newEvent) => ({
  ...state,
  eventAccumulator: state.eventAccumulator.filter(event=> event !== newEvent)
}));

enterprises.on(emitEnterpriseEvent, (state, event) => ({
  ...state,
  eventAccumulator: [...state.eventAccumulator, event]
}));

export default enterprises;