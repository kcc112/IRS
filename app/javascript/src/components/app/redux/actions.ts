import { createAction } from 'redux-act';
import { AlertType } from '../../shared/alerts/types';

export const showModalSuccess = createAction('show modal success');
export const hideModalSuccess = createAction('hide modal success');

export const apiRequestIncrement = createAction('increment api process success');
export const apiRequestDecrement = createAction('decrement api process success');
export const apiRequestError = createAction<Error>('error while communicatting with api');

export const showAlert = createAction<{ message: string; type: AlertType }>('show alert');
export const hideAlert = createAction('hide alert');