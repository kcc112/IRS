import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CommentCreatePayload, CommentEditPayload } from '../../../../../api/payloads';
import { TextArea } from '../../../../shared/controls/textarea';
import { CommentsIndex } from '../../../redux/types';
import { useStyles } from './styles';

interface Params {
  issueId: string;
  userId: string;
  comment: CommentsIndex;
  onHandleCreate: (formObject: CommentCreatePayload) => void;
  onHandleEdit: (id: string, formObject: CommentEditPayload) => void;
}

const defoultFormObject: CommentCreatePayload = {
  content: '',
  user_id: '',
  issue_id: '',
}

export function CreateEditForm({
  issueId,
  userId,
  comment,
  onHandleCreate,
  onHandleEdit
}: Params) {
  const { t } = useTranslation();
  const classes = useStyles();
  const [formObject, setformObject] = useState<CommentCreatePayload>(defoultFormObject);

  useEffect(() => {
    setformObject({
      content: comment ? comment.attributes.comment : '',
      user_id: userId,
      issue_id: issueId
    })
  }, [])

  const handleChange = (value: string, name: string) => {
    setformObject({
      ...formObject,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (comment) onHandleEdit(comment.id,  {content: formObject.content });
    else onHandleCreate(formObject);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.formRow}>
        <TextArea
          id='content'
          name='content'
          value={formObject.content}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChange(event.target.value, event.target.name);
          }}
          placeholder={t('Add comment')}
          rows={3}
          rowsMax={3}
        />
      </div>
      <div className={classes.submitWrapper}>
        { comment ? (
            <button type='submit' className={`button ${classes.formSubmit}`}>
              {t('Edit')}
            </button>
          ) : (
            <button type='submit' className={`button ${classes.formSubmit}`}>
              {t('Submit')}
            </button>
          )
        }
      </div>
    </form>
  );
}