import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useStyles } from './styles';
import { Modal } from '../../shared/modal/container';
import { AppLocation } from '../../../app/types';
import { CreateEditHeader } from './components/header';

export function EnterpriseCreateEdit() {
  const { t } = useTranslation();
  const classes = useStyles({});
  const history = useHistory();
  const location = useLocation<AppLocation>();

  const handleClose = () => {
    history.push(location.state.backgroundLocation)
  }

  const resolveLocation = (): string => {
    return location.pathname.includes('edit') ? t('Enterprise edit') : t('Enterprise create');
  }

  return (
    <Modal
      onClose={handleClose}
      width="500px"
      visible
    >
      <div className={classes.container}>
        <CreateEditHeader
          title={resolveLocation()}
          onHandleClose={handleClose}
        />
      </div>
    </Modal>
  );
}