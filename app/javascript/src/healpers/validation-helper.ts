import * as yup from 'yup';

import { ValidationError } from '../app/types';

export const findErrorByFieldName = (name: string, errors: ValidationError[] | undefined): string | undefined => {
  const error = errors && errors.find(err => err.path === name);
  return error ? error.msg : undefined;
};

export function validate<T>(
  formObject: T,
  schema: yup.Schema<any>
): { isValid: boolean; errors: ValidationError[] | undefined } {
  let isValid = true;
  let errors: ValidationError[] | undefined;
  try {
    schema.validateSync(formObject, { abortEarly: false });
  } catch (err) {
    isValid = false;
    errors = err.inner.map((e: any) => ({
      path: e.path,
      msg: e.message,
    }));
  }
  return { isValid, errors };
}
