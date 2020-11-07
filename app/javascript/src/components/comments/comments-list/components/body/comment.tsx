import React from 'react';
import { useTranslation } from 'react-i18next';

import { CommentsIndex } from '../../../redux/types';
import { useStyles } from './styles';

interface Params {
  userId: string;
  comment: CommentsIndex;
  onRedirectToCommentDelet: (id: string) => void;
}

export function CommentContainer({
  userId,
  comment,
  onRedirectToCommentDelet
}: Params) {
  const { t } = useTranslation();
  const classes = useStyles({});

  return (
    <div className={classes.container}>
      <div className={classes.commentInfo}>
        <div className={classes.userName}>
          {`${comment.attributes.commentOwner.name} ${comment.attributes.commentOwner.surname}`}
        </div>
        <div>
          <div>{comment.attributes.updatedAt}</div>
          { comment.attributes.commentOwner.id === userId && (
            <button 
              type='button'
              className={`button ${classes.actionButton}`}
              onClick={() => onRedirectToCommentDelet(comment.id)}
            >
              {t('Delete')}
            </button>
          )}  
        </div>
      </div>
      <div className={classes.comment}>
        {comment.attributes.comment}
      </div>
    </div>
  );
}