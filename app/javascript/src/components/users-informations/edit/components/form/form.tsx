import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import * as yup from 'yup';

import { useStyles } from './styles';
import { Input } from '../../../../shared/controls/input/input';
import { validate, findErrorByFieldName } from '../../../../../healpers/validation-helper';
import { ValidationError } from '../../../../../app/types';
import { selectUserInformations } from '../../../redux/selectors';
import { UserInformationsEditFormObject } from '../../types';

interface Props {
  onHandleSubmit: (formObject: UserInformationsEditFormObject) => void;
}

const defoultFormObject: UserInformationsEditFormObject = {
  name: '',
  surname: '',
  phoneNumber: '',
}

const PHONE_REGEX = /^[\\+]?(([1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export function FormContainer({ onHandleSubmit }: Props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const [formObject, setformObject] = useState<UserInformationsEditFormObject>(defoultFormObject);
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const userInformations = useSelector(selectUserInformations);

  useEffect(() => {
    if (userInformations) setformObject({
      name: userInformations.attributes.name,
      surname: userInformations.attributes.surname,
      phoneNumber: userInformations.attributes.phoneNumber
    })
  }, [userInformations]);

  const schema = yup.object().shape({
    name: yup.string()
      .required(t('Name is required'))
      .matches(/^[a-zA-Z ]+$/, t('Name has wrong format')),
    surname: yup.string()
      .required(t('Surname is required'))
      .matches(/^[a-zA-Z ]+$/, t('Surname has wrong format')),
    phoneNumber: yup.string()
      .required(t('Phone number is required'))
      .matches(PHONE_REGEX, t('Wrong phone number format')),
  });

  const handleChange = (value: string, name: string) => {
    setformObject({
      ...formObject,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { isValid, errors } = validate(formObject, schema);
    setErrors(errors);
    if (isValid) onHandleSubmit(formObject);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.formRow}>
        <Input
          id='name'
          name='name'
          type='text'
          value={formObject.name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(event.target.value, event.target.name);
          }}
          placeholder={t('Name')}
          error={findErrorByFieldName('name', errors)}
        />
      </div>
      <div className={classes.formRow}>
        <Input
          id='surname'
          name='surname'
          type='text'
          value={formObject.surname}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(event.target.value, event.target.name);
          }}
          placeholder={t('Surname')}
          error={findErrorByFieldName('surname', errors)}
        />
      </div>
      <div className={classes.formRow}>
        <Input
          id='phoneNumber'
          name='phoneNumber'
          type='text'
          value={formObject.phoneNumber}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(event.target.value, event.target.name);
          }}
          placeholder={t('Phone number')}
          error={findErrorByFieldName('phoneNumber', errors)}
        />
      </div>
      <div className={classes.submitWrapper}>
        <button type='submit' className={`button ${classes.formSubmit}`}>
          {t('Submit')}
        </button>
      </div>
    </form>
  );
}