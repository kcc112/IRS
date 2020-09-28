import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import * as yup from 'yup';

import { useStyles } from './styles';
import { TextArea } from '../../../../shared/controls/textarea';
import { validate, findErrorByFieldName } from '../../../../../healpers/validation-helper';
import { ValidationError } from '../../../../../app/types';
import { selectIssue } from '../../../redux/selectors';
import { IssueEditCreateFormObject } from '../../types';

interface Props {
  onHandleSubmit: (formObject: IssueEditCreateFormObject) => void;
}

const defoultFormObject: IssueEditCreateFormObject = {
  description: '',
  issueType: '',
  reportedById: '',
}

export function FormContainer({ onHandleSubmit }: Props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const [formObject, setformObject] = useState<IssueEditCreateFormObject>(defoultFormObject);
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const issue = useSelector(selectIssue);

  useEffect(() => {
    if (issue) setformObject({
      description: issue.attributes.description,
      issueType: issue.attributes.issueType,
      reportedById: issue.attributes.reportedBy ? issue.attributes.reportedBy.userId : '',
    })
  }, [issue])

  const schema = yup.object().shape({
    issueType: yup.string().required(t('Issue type is required')),
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
        <TextArea
          id='description'
          name='description'
          value={formObject.description}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(event.target.value, event.target.name);
          }}
          placeholder={t('Issue description')}
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