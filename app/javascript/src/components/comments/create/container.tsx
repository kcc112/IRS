import React from 'react';
import { useDispatch } from 'react-redux';

import { CommentCreatePayload } from '../../../api/payloads';
import { createComment } from './actions';
import { CreateForm } from './components/form/form';

interface Params {
  issueId: string;
  userId: string;
}

export function CommentCreate({
  issueId,
  userId
}: Params) {
  const dispatch = useDispatch();

  const handleSubmit = (formObject: CommentCreatePayload) => {
    dispatch(createComment(formObject));
  };

  return (
    <CreateForm
      issueId={issueId}
      userId={userId}
      onHandleSubmit={handleSubmit}
    />
  );
}