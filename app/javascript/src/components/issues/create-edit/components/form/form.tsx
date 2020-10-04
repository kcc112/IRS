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
import SimpleSelect from '../../../../shared/dropdown/simple-select';
import { IssuesTypes, IssueType } from '../../../redux/types';
import { Option } from '../../../../../app/types';
import { selectCurrentUser } from '../../../../../session/redux/selectors';

interface Props {
  issuseTypes: IssuesTypes[];
  onHandleSubmit: (formObject: IssueEditCreateFormObject) => void;
}

const defoultFormObject: IssueEditCreateFormObject = {
  description: '',
  issueType: IssueType.OTHER,
  reportedById: '',
}

export function FormContainer({
  issuseTypes,
  onHandleSubmit,
}: Props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const [formObject, setformObject] = useState<IssueEditCreateFormObject>(defoultFormObject);
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const issue = useSelector(selectIssue);
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (issue) setformObject({
      description: issue.attributes.description,
      issueType: issue.attributes.issueType,
    })

    if (!issue && currentUser) setformObject({
      description: '',
      issueType: IssueType.OTHER,
      reportedById: currentUser.id,
    })
  }, [issue, currentUser])

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

  const resolveIssuesTypes = (issuesTypes: IssuesTypes[]): Option[] => {
    return issuesTypes.map(issueType => {
      return ({
        value: issueType.type,
        id: issueType.type
      });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.formRow}>
        <SimpleSelect
          value={{
            value: formObject.issueType,
            id: issuseTypes.filter(issueType => issueType.type === formObject.issueType)[0].type,
          }}
          options={resolveIssuesTypes(issuseTypes)}
          onChange={(value: string) => handleChange(value, 'issueType')}
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