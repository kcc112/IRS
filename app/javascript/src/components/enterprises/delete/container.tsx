import React, { useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { useStyles } from './styles';
import { Modal } from '../../shared/modal/container';
import { AppLocation } from '../../../app/types';
import { hideModal, deleteEnterprise } from './actions';

interface PathParams {
  id?: string;
}

export function EnterpriseDelete() {
  const { t } = useTranslation();
  const classes = useStyles({});
  const history = useHistory();
  const dispatch = useDispatch();
  const match = useRouteMatch<PathParams>();
  const [enterpriseId] = useState(match && match.params.id ? match.params.id  : undefined);
  const location = useLocation<AppLocation>();


  const handleClose = () => {
    history.push(location.state.backgroundLocation)
    dispatch(hideModal());
  };

  const handleSubmit = () => {
    if (enterpriseId) dispatch(deleteEnterprise(enterpriseId));
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
          {t('Are you shure you want to delete enterprise ?')}
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