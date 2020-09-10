import React, { useState, useEffect } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useStyles } from './styles';
import { Modal } from '../../shared/modal/container';
import { AppLocation } from '../../../app/types';
import { hideModal, fetchEnterprise } from './actions';
import { selectEnterprise } from '../redux/selectors';
import { EnterpriseShowHeader } from './components/header';
import { EnterpriseShowBody } from './components/body';
import { clearEnterprise } from '../create-edit/actions';

interface PathParams {
  id?: string;
}

export function EnterpriseShow() {
  const classes = useStyles({});
  const history = useHistory();
  const dispatch = useDispatch();
  const match = useRouteMatch<PathParams>();
  const enterprise = useSelector(selectEnterprise)
  const [enterpriseId] = useState(match && match.params.id ? match.params.id  : undefined);
  const location = useLocation<AppLocation>();

  useEffect(() => {
    if (!enterprise && enterpriseId) dispatch(fetchEnterprise(enterpriseId));
  }, [enterprise, enterpriseId]);
  
  useEffect(() => () => {
    dispatch(clearEnterprise());
  }, [dispatch]);

  const handleClose = () => {
    history.push(location.state.backgroundLocation)
    dispatch(hideModal());
  };

  return (
    <Modal
      onClose={handleClose}
      width='450px'
      visible
    >
      <div className={classes.container}>
        <EnterpriseShowHeader
           name={enterprise ? enterprise.attributes.name : ''}
           onHandleClose={handleClose}
        />
        <EnterpriseShowBody description={enterprise ? enterprise.attributes.description : ''} />
      </div>
    </Modal>
  );
}