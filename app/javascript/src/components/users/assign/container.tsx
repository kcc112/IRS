import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { useStyles } from './styles';
import { Modal } from '../../shared/modal/container';
import { AppLocation } from '../../../app/types';
import { hideModal } from './actions';
import { selectIndexEnterprises } from '../../enterprises/redux/selectors';
import { fetchEnterprises } from '../../enterprises/index/actions';

interface PathParams {
  id?: string;
}

export function AssignUser() {
  const { t } = useTranslation();
  const classes = useStyles({});
  const history = useHistory();
  const dispatch = useDispatch();
  const match = useRouteMatch<PathParams>();
  const [userId] = useState(match && match.params.id ? match.params.id  : undefined);
  const location = useLocation<AppLocation>();
  const enterprises = useSelector(selectIndexEnterprises);

  useEffect(() => {
    dispatch(fetchEnterprises());
  }, [dispatch]);

  const handleClose = () => {
    history.push(location.state.backgroundLocation)
    dispatch(hideModal());
  };

  if (!enterprises) return <></>;

  return (
    <Modal
      onClose={handleClose}
      width='450px'
      height='500px'
      visible
    >
      <div className={classes.container}>
        { enterprises.map(enterprise => {
          return (
            <div>
              <div>{enterprise.attributes.name}</div>
              <button 
                type='submit'
                className={`button`}
                onClick={() => {}}
              >
                {t('Assign')}
              </button>
            </div>
          )
        })}          
      </div>
    </Modal>
  );
}