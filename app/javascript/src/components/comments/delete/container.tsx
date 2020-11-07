import React, { useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { useStyles } from './styles';
import { Modal } from '../../shared/modal/container';
import { AppLocation } from '../../../app/types';
import { hideModal, deleteComment } from './actions';

interface PathParams {
  id?: string;
}

export function CommentDelete() {
  const { t } = useTranslation();
  const classes = useStyles({});
  const history = useHistory();
  const dispatch = useDispatch();
  const match = useRouteMatch<PathParams>();
  const [commentId] = useState(match && match.params.id ? match.params.id  : undefined);
  const location = useLocation<AppLocation>();


  const handleClose = () => {
    const { state } = location;
    if (state && state.previousLocation) {
      const { previousLocation, backgroundLocation } = state;
      history.replace(previousLocation,{
        previousLocation: location,
        backgroundLocation: backgroundLocation,
      });
    } else {
      history.goBack();
    }
  };

  const handleSubmit = () => {
    if (commentId) dispatch(deleteComment(commentId));
    handleClose();
  };

  return (
    <Modal
      onClose={handleClose}
      width='450px'
      visible
    >
      <div className={classes.container}>
        <div className={classes.message}>
          {t('Are you shure you want to delete comment ?')}
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