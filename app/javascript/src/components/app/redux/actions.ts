import { createAction } from 'redux-act';

export const showModalSuccess = createAction('show modal success');
export const hideModalSuccess = createAction('hide modal success');

export const apiRequestIncrement = createAction('increment api process success');
export const apiRequestDecrement = createAction('increment api process success');
export const apiRequestError = createAction<Error>('error while communicatting with api');