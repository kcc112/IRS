import React, { useState } from 'react';

import { useStyles } from './styles';
import { Input } from '../../../../shared/controls/input/input';
import { TextArea } from '../../../../shared/controls/textarea';
import { EnterpriseEditPayload } from '../../../../../api/payloads';

interface Props {
  onHandleSubmit: (formObject: EnterpriseEditPayload) => void;
}

const defoultFormObject: EnterpriseEditPayload = {
  name: '',
  description: '',
}

export function FormContainer({ onHandleSubmit }: Props) {
  const classes = useStyles();
  const [formObject, setformObject] = useState<EnterpriseEditPayload>(defoultFormObject)

  const handleChange = (value: string, name: string) => {
    setformObject({
      ...formObject,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onHandleSubmit(formObject);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.formRow}>
        <Input
          id="name"
          name="name"
          type="text"
          value={formObject.name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(event.target.value, event.target.name);
          }}
          placeholder={'Test'}
        />
      </div>
      <div className={classes.formRow}>
        <TextArea
          id="description"
          name="description"
          value={formObject.description}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(event.target.value, event.target.name);
          }}
          placeholder={'Test'}
          rows={4}
          rowsMax={4}
        />
      </div>
      <div className={classes.submitWrapper}>
        <button type="submit" className={`button ${classes.formSubmit}`}>
          Submit
        </button>
      </div>
    </form>
  );
}