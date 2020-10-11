import React, { useState, useEffect } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useStyles } from './styles';
import { Modal } from '../../shared/modal/container';
import { AppLocation } from '../../../app/types';
import { hideModal, clearIssue } from './actions';
import { selectIssue } from '../redux/selectors';
import { IssueShowHeader } from './components/header';
import { IssueShowBody } from './components/body';
import { fetchIssue } from './actions';

interface PathParams {
  id?: string;
}

export function IssueShow() {
  const classes = useStyles({});
  const history = useHistory();
  const dispatch = useDispatch();
  const match = useRouteMatch<PathParams>();
  const issue = useSelector(selectIssue);
  const [issueId] = useState(match && match.params.id ? match.params.id  : undefined);
  const location = useLocation<AppLocation>();

  useEffect(() => {
    if (!issue && issueId) dispatch(fetchIssue(issueId));
  }, [issue, issueId]);
  
  useEffect(() => () => {
    dispatch(clearIssue());
  }, [dispatch]);

  const handleClose = () => {
    history.push(location.state.backgroundLocation)
    dispatch(hideModal());
  };

  return (
    <Modal
      onClose={handleClose}
      width='500px'
      height='200px'
      visible
    >
      <div className={classes.container}>
        <IssueShowHeader
           name={issue ? issue.attributes.issueType : ''}
           onHandleClose={handleClose}
        />
        <IssueShowBody issue={issue} />
      </div>
    </Modal>
  );
}