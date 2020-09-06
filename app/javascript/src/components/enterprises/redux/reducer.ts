import { createReducer } from 'redux-act';

import { EnterprisesState } from './types';
import {
  enterprisesFetchSuccessfully,
  enterpriseEditedSuccessfully,
  enterpriseCreatedSuccessfully,
} from './actions';

const initialState: EnterprisesState = {
  entities: {
    enterprises: undefined,
    enterprise: undefined,
  },
};

const enterprises = createReducer<EnterprisesState>({}, initialState);

enterprises.on(enterprisesFetchSuccessfully, (state, enterprises) => ({
  ...state,
  entities: {
    ...state.entities,
    enterprises,
  },
}));

enterprises.on(enterpriseEditedSuccessfully, (state, enterprise) => ({
  ...state,
  entities: {
    ...state.entities,
    enterprise,
  },
}));

enterprises.on(enterpriseCreatedSuccessfully, (state, enterprise) => ({
  ...state,
  entities: {
    ...state.entities,
    enterprise,
  },
}));

export default enterprises;