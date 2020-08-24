import { createReducer } from 'redux-act';

import { EnterprisesState } from './types';
import {
  enterprisesOverwrite,
} from './actions';

const initialState: EnterprisesState = {
  entities: {
    enterprises: undefined,
  },
};

const enterprises = createReducer<EnterprisesState>({}, initialState);

enterprises.on(enterprisesOverwrite, (state, enterprises) => ({
  ...state,
  entities: {
    ...state.entities,
    enterprises,
  },
}));

export default enterprises;