import { createAction } from 'redux-act';

import { EnterprisesIndex } from './types';

export const enterprisesFetch = createAction('fetch enterprises');
export const enterprisesOverwrite = createAction<EnterprisesIndex[]>('overwrite enterprises');