import React from 'react';
import { CommentsIndex } from '../../../redux/types';
import { useStyles } from './styles';

interface Params {
  comment: CommentsIndex;
}

export function CommentContainer({
  comment
}: Params) {
  const classes = useStyles({});

  return (
    <div className={classes.container}>
      <div className={classes.commentInfo}>
        <div className={classes.userName}>
          {`${comment.attributes.commentOwner.name} ${comment.attributes.commentOwner.surname}`}
        </div>
        <div>{comment.attributes.updatedAt}</div>
      </div>
      <div className={classes.comment}>
        {comment.attributes.comment}
      </div>
    </div>
  );
}