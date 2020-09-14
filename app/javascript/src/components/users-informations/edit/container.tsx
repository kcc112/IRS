import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, matchPath, useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { useStyles } from './styles';
import { Modal } from '../../shared/modal/container';
import { AppLocation } from '../../../app/types';
import { CreateEditHeader } from './components/header';
import { FormContainer } from './components/form';
import { 
  hideModal,
  fetchUserInformations,
  clearUserInformations,
  editUserInformations
} from './actions';
import routes from '../../../routes/routes';
import { UserInformationsEditFormObject } from './types';

interface PathParams {
  id?: string;
}

export function UserInformationsEdit() {
  const { t } = useTranslation();
  const classes = useStyles({});
  const history = useHistory();
  const dispatch = useDispatch();
  const match = useRouteMatch<PathParams>();
  const location = useLocation<AppLocation>();
  const [userInformationsId] = useState<string | undefined>(match && match.params.id ? match.params.id : undefined);

  useEffect(() => {
    const edit = matchPath(location.pathname, { path: routes.irs.usersInformations.edit, exact: true });
    if (edit !== null && userInformationsId) {
      dispatch(fetchUserInformations(userInformationsId));
    }
  }, [dispatch, location.pathname, userInformationsId]);

  useEffect(() => () => {
    dispatch(clearUserInformations());
  }, [dispatch]);

  const handleClose = () => {
    history.push(location.state.backgroundLocation)
    dispatch(hideModal());
  };

  const handleSubmit = (formObject: UserInformationsEditFormObject) => {
    if (userInformationsId) dispatch(editUserInformations({ id: userInformationsId, formObject: formObject }));
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
            title={t('Edit user informations')}
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