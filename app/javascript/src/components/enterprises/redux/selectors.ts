import { createSelector } from 'reselect';

import { AppState } from '../../../store/reducer';
import {
  EnterprisesIndex,
} from './types';

export const selectIndexEnterprises = createSelector<AppState, EnterprisesIndex[], EnterprisesIndex[]>(
  state => state.enterprises.entities.enterprises,
  enterprises => enterprises
);
