import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, matchPath, useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { useStyles } from './styles';
import { Modal } from '../../shared/modal/container';
import { AppLocation } from '../../../app/types';
import { CreateEditHeader } from './components/header';
import { FormContainer } from './components/form';
import { EnterpriseEditPayload } from '../../../api/payloads';
import { createEnterprise, hideModal, fetchEnterprise, clearEnterprise, editEnterprise } from './actions';
import routes from '../../../routes/routes';

interface PathParams {
  id?: string;
}

export function EnterpriseCreateEdit() {
  const { t } = useTranslation();
  const classes = useStyles({});
  const history = useHistory();
  const dispatch = useDispatch();
  const match = useRouteMatch<PathParams>();
  const location = useLocation<AppLocation>();
  const [enterpriseId] = useState<string | undefined>(match && match.params.id ? match.params.id : undefined);

  useEffect(() => {
    const edit = matchPath(location.pathname, { path: routes.irs.enterprises.edit, exact: true });
    if (edit !== null && enterpriseId) {
      dispatch(fetchEnterprise(enterpriseId));
    }
  }, [dispatch, location.pathname, enterpriseId]);

  useEffect(() => () => {
    dispatch(clearEnterprise());
  }, [dispatch]);

  const handleClose = () => {
    history.push(location.state.backgroundLocation)
    dispatch(hideModal());
  };

  const resolveLocation = (): string => {
    const edit = matchPath(location.pathname, { path: routes.irs.enterprises.edit, exact: true });
    const create = matchPath(location.pathname, { path: routes.irs.enterprises.create, exact: true });
    if (edit !== null) return t('Enterprise edit');
    if (create !== null) return t('Enterprise create');
  };

  const handleSubmit = (formObject: EnterpriseEditPayload) => {
    const edit = matchPath(location.pathname, { path: routes.irs.enterprises.edit, exact: true });
    const create = matchPath(location.pathname, { path: routes.irs.enterprises.create, exact: true });
    if (create !== null) dispatch(createEnterprise(formObject));
    if (edit !== null && enterpriseId) dispatch(editEnterprise({ id: enterpriseId, formObject: formObject }));
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