import { createReducer } from 'redux-act';

import { EnterprisesState } from './types';
import {
  enterprisesFetchSuccessfully,
  enterprisesClear,
  removeEventFromAccumulator,
  emitEnterpriseEvent,
  enterpriseFetchSuccessfully,
  enterpriseClear,
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

enterprises.on(enterpriseFetchSuccessfully, (state, enterprise) => ({
  ...state,
  entities: {
    ...state.entities,
    enterprise,
  },
}));

enterprises.on(enterprisesClear, state => ({
  ...state,
  entities: {
    ...state.entities,
    enterprises: [],
  },
}));

enterprises.on(enterpriseClear, state => ({
  ...state,
  entities: {
    ...state.entities,
    enterprise: undefined,
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