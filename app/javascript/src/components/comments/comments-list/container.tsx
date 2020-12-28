import { compile } from 'path-to-regexp';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

import { AppLocation } from '../../../app/types';
import routes from '../../../routes/routes';
import { selectCurrentUser } from '../../../session/redux/selectors';
import { Modal } from '../../shared/modal/container';
import { CommentCreateEdit } from '../create-edit/container';
import { removeEventFromAccumulator } from '../redux/actions';
import { selectCommentsEvent, selectIndexComments } from '../redux/selectors';
import { CommentsEvent } from '../redux/types';
import { fetchComments, hideModal, showModal } from './actions';
import { CommentContainer } from './components/body';
import { CommentsListHeader } from './components/header/header';
import { useStyles } from './styles';

interface PathParams {
  id?: string;
}

export function CommentsList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation<AppLocation>();
  const classes = useStyles({});
  const match = useRouteMatch<PathParams>();
  const comments = useSelector(selectIndexComments);
  const user = useSelector(selectCurrentUser);
  const events = useSelector(selectCommentsEvent);
  const [edit, setEdit] = useState<boolean>(false);
  const [currentCommentId, setCurrentCommentId] = useState<string | undefined>(undefined);
  const [issueId] = useState<string | undefined>(match && match.params.id ? match.params.id : undefined);

  useEffect(() => {
    if (issueId) dispatch(fetchComments(issueId));
  }, [dispatch]);

  useEffect(() => {
    const event = events.find(event => {
      return event === CommentsEvent.CREATED_SUCCESSFULLY ||
                       CommentsEvent.DELETED_SUCCESSFULLY ||
                       CommentsEvent.REFRESH
    });
    if (event) {
      dispatch(fetchComments(issueId));
      dispatch(removeEventFromAccumulator(event));
    }
  }, [dispatch, events]);

  const handleClose = () => {
    history.push(location.state.backgroundLocation)
    dispatch(hideModal());
  };

  const editComment = (commentId: string) => {
    setEdit(true);
    if (commentId === currentCommentId) setEdit(false);
    setCurrentCommentId(commentId);
  }

  const redirectToCommentDelete = (id: string) => {
    history.replace(compile(routes.irs.comments.delete)({ id: id }),{
      previousLocation: location,
      backgroundLocation: location.state.backgroundLocation,
    });
    dispatch(showModal());
  };

  return (
    <Modal
      onClose={handleClose}
      width='450px'
      height='380px'
      visible
    >
      <div className={classes.container}>
        <section>
          <CommentsListHeader
            onHandleClose={handleClose}
          />
        </section>
        <section className={classes.createContainer}>
          <CommentCreateEdit
            issueId={issueId}
            userId={user.id}
            setEdit={setEdit}
            setCurrentCommentId={setCurrentCommentId}
          />
        </section>
        <section className={classes.commentWrapper}>
          { comments.map(comment => {
            return (edit && comment.id === currentCommentId) ? (
              <CommentCreateEdit
                issueId={issueId}
                key={comment.id}
                userId={user.id}
                comment={comment}
                setEdit={setEdit}
                setCurrentCommentId={setCurrentCommentId}
              />
            ) : (
              <CommentContainer 
                comment={comment}
                key={comment.id}
                user={user}
                onEditComment={editComment}
                onRedirectToCommentDelet={redirectToCommentDelete}
              />
            )
          })}
        </section>
      </div>
    </Modal>
  );
}