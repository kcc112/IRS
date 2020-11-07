import React from 'react';
import { useDispatch } from 'react-redux';

import { CommentCreatePayload, CommentEditPayload } from '../../../api/payloads';
import { CommentsIndex } from '../redux/types';
import { createComment, editComment } from './actions';
import { CreateEditForm } from './components/form/form';

interface Params {
  issueId: string;
  userId: string;
  comment?: CommentsIndex;
  setEdit: (edit: boolean) => void;
}

export function CommentCreateEdit({
  issueId,
  userId,
  comment,
  setEdit
}: Params) {
  const dispatch = useDispatch();

  const onHandleCreate = (formObject: CommentCreatePayload) => {
    dispatch(createComment(formObject));
  };

  const onHandleEdit = (id: string, formObject: CommentEditPayload) => {
    dispatch(editComment(id, formObject));
    setEdit(false);
  };

  return (
    <CreateEditForm
      issueId={issueId}
      userId={userId}
      comment={comment}
      onHandleCreate={onHandleCreate}
      onHandleEdit={onHandleEdit}
    />
  );
}