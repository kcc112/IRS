import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import * as yup from 'yup';

import { useStyles } from './styles';
import { Input } from '../../../../shared/controls/input/input';
import { TextArea } from '../../../../shared/controls/textarea';
import { EnterpriseEditPayload } from '../../../../../api/payloads';
import { validate, findErrorByFieldName } from '../../../../../healpers/validation-helper';
import { ValidationError } from '../../../../../app/types';
import { selectEnterprise } from '../../../redux/selectors';

interface Props {
  onHandleSubmit: (formObject: EnterpriseEditPayload) => void;
}

const defoultFormObject: EnterpriseEditPayload = {
  name: '',
  description: '',
}

export function FormContainer({ onHandleSubmit }: Props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const [formObject, setformObject] = useState<EnterpriseEditPayload>(defoultFormObject);
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const enterprise = useSelector(selectEnterprise);

  useEffect(() => {
    if (enterprise) setformObject({
      name: enterprise.attributes.name,
      description: enterprise.attributes.description,
    })
  }, [enterprise])

  const schema = yup.object().shape({
    name: yup.string()
      .required(t('Enterprise name is required'))
      .matches(/^[a-zA-Z ]+$/, t('Enterprise name has wrong format')),
    description: yup.string(),
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
          placeholder={t('Enterprise name')}
          error={findErrorByFieldName('name', errors)}
        />
      </div>
      <div className={classes.formRow}>
        <TextArea
          id='description'
          name='description'
          value={formObject.description}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(event.target.value, event.target.name);
          }}
          placeholder={t('Enterprise description')}
          rows={4}
          rowsMax={4}
          error={findErrorByFieldName('description', errors)}
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