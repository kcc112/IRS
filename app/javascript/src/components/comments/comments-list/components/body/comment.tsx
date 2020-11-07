import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { CommentsIndex } from '../../../redux/types';
import { useStyles } from './styles';
import { AppRolesConst, CurrentUser } from '../../../../../session/redux/types';

interface Params {
  user: CurrentUser;
  comment: CommentsIndex;
  onRedirectToCommentDelet: (id: string) => void;
  onEditComment: (id: string) => void;
}

export function CommentContainer({
  user,
  comment,
  onRedirectToCommentDelet,
  onEditComment,
}: Params) {
  const classes = useStyles({});

  return (
    <div className={classes.container}>
      <div className={classes.commentInfo}>
        <div className={classes.userName}>
          {`${comment.attributes.commentOwner.name} ${comment.attributes.commentOwner.surname}`}
        </div>
        <div className={classes.actionsContiner}>
          <div>{comment.attributes.updatedAt}</div>
          { comment.attributes.commentOwner.id === user.id && (
            <button 
              type='button'
              className={`button ${classes.actionButton}`}
              onClick={() => onRedirectToCommentDelet(comment.id)}
            >
              <DeleteIcon />
            </button>
          )}
          { ( comment.attributes.commentOwner.id === user.id || user.role === AppRolesConst.ADMIN ) && (
            <button 
              type='button'
              className={`button ${classes.actionButton}`}
              onClick={() => onEditComment(comment.id)}
            >
              <EditIcon />
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