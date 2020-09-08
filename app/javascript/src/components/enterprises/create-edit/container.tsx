import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { useStyles } from './styles';
import { Modal } from '../../shared/modal/container';
import { AppLocation } from '../../../app/types';
import { CreateEditHeader } from './components/header';
import { FormContainer } from './components/form';
import { EnterpriseEditPayload } from '../../../api/payloads';
import { createEnterprise } from './actions';

export function EnterpriseCreateEdit() {
  const { t } = useTranslation();
  const classes = useStyles({});
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation<AppLocation>();

  const handleClose = () => {
    history.push(location.state.backgroundLocation)
  };

  const resolveLocation = (): string => {
    return location.pathname.includes('edit') ? t('Enterprise edit') : t('Enterprise create');
  };

  const handleSubmit = (formObject: EnterpriseEditPayload) => {
    dispatch(createEnterprise(formObject));
    handleClose();
  };

  return (
    <Modal
      onClose={handleClose}
      width='450px'
      visible
    >
      <div className={classes.container}>
        <section>
          <CreateEditHeader
            title={resolveLocation()}
            onHandleClose={handleClose}
          />
        </section>
        <section>
          <FormContainer
            onHandleSubmit={handleSubmit}
          />
        </section>
      </div>
    </Modal>
  );
}