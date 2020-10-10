import React, { useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { useStyles } from './styles';
import { Modal } from '../../shared/modal/container';
import { AppLocation } from '../../../app/types';
import { assignUserToIssue, hideModal } from './actions';
import { selectCurrentUser } from '../../../session/redux/selectors';

interface PathParams {
  id?: string;
}

export function AssignToIssue() {
  const { t } = useTranslation();
  const classes = useStyles({});
  const history = useHistory();
  const dispatch = useDispatch();
  const match = useRouteMatch<PathParams>();
  const [issueId] = useState(match && match.params.id ? match.params.id  : undefined);
  const location = useLocation<AppLocation>();
  const currentUser = useSelector(selectCurrentUser);


  const handleClose = () => {
    history.push(location.state.backgroundLocation)
    dispatch(hideModal());
  };

  const handleSubmit = () => {
    if (issueId && currentUser) dispatch(assignUserToIssue(issueId, currentUser.id));
    handleClose();
  }

  return (
    <Modal
      onClose={handleClose}
      width='450px'
      visible
    >
      <div className={classes.container}>
        <div className={classes.message}>
          {t('Are you sure you want to be assigned to issue ?')}
        </div>
        <div className={classes.actionsContainer}>
          <div className={classes.buttonWrapper}>
            <button 
              type='button'
              className={`button ${classes.actionButton}`}
              onClick={handleSubmit}
            >
              {t('Yes')}
            </button>
          </div>
          <div className={classes.buttonWrapper}>
            <button 
              type='button'
              className={`button ${classes.actionButton}`}
              onClick={handleClose}
            >
              {t('No')}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}