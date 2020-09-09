import { createSelector } from 'reselect';

import { AppState } from '../../../store/reducer';
import {
  EnterprisesIndex, EnterpriseEvent, EnterpriseShow,
} from './types';

export const selectIndexEnterprises = createSelector<AppState, EnterprisesIndex[], EnterprisesIndex[]>(
  state => state.enterprises.entities.enterprises,
  enterprises => enterprises
);

export const selectEnterprise = createSelector<AppState, EnterpriseShow | undefined, EnterpriseShow | undefined>(
  state => state.enterprises.entities.enterprise,
  enterprises => enterprises
);

export const selectEnterpriseEvent = createSelector<AppState, EnterpriseEvent[], EnterpriseEvent[]>(
  state => state.enterprises.eventAccumulator,
  eventAccumulator => eventAccumulator
);
