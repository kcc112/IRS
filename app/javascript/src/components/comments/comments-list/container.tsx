import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

import { AppLocation } from '../../../app/types';
import { Modal } from '../../shared/modal/container';
import { selectIndexComments } from '../redux/selectors';
import { fetchComments, hideModal } from './actions';
import { CommentContainer } from './components/body';
import { CommentsListHeader } from './components/header/header';
import { useStyles } from './styles';

interface PathParams {
  id?: string;
}

export function CommentsList() {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation<AppLocation>();
  const classes = useStyles({});
  const match = useRouteMatch<PathParams>();
  const comments = useSelector(selectIndexComments);
  const [issueId] = useState<string | undefined>(match && match.params.id ? match.params.id : undefined);

  useEffect(() => {
    if (issueId) dispatch(fetchComments(issueId));
  }, [dispatch]);

  const handleClose = () => {
    history.push(location.state.backgroundLocation)
    dispatch(hideModal());
  };

  return (
    <Modal
      onClose={handleClose}
      width='450px'
      height='350px'
      visible
    >
      <div className={classes.container}>
        <section>
          <CommentsListHeader
            onHandleClose={handleClose}
          />
        </section>
        <section className={classes.commentWrapper}>
          { comments.map(comment => <CommentContainer comment={comment} key={comment.id} />)}
        </section>
      </div>
    </Modal>
  );
}