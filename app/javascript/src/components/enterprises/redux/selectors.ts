import { createSelector } from 'reselect';

import { AppState } from '../../../store/reducer';
import {
  EnterprisesIndex, EnterpriseEvent,
} from './types';

export const selectIndexEnterprises = createSelector<AppState, EnterprisesIndex[], EnterprisesIndex[]>(
  state => state.enterprises.entities.enterprises,
  enterprises => enterprises
);

export const selectEnterpriseEvent = createSelector<AppState, EnterpriseEvent[], EnterpriseEvent[]>(
  state => state.enterprises.eventAccumulator,
  eventAccumulator => eventAccumulator
);
