import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { useStyles } from './styles';
import { Modal } from '../../shared/modal/container';
import { AppLocation } from '../../../app/types';
import { assignToEnterprise, hideModal } from './actions';
import { selectIndexEnterprises } from '../../enterprises/redux/selectors';
import { fetchEnterprises } from '../../enterprises/index/actions';
import { selectUserInformationsEvent } from '../../users-informations/redux/selectors';
import { UserInformationsEvent } from '../../users-informations/redux/types';

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
  const events = useSelector(selectUserInformationsEvent);

  useEffect(() => {
    dispatch(fetchEnterprises());
  }, [dispatch]);

  useEffect(() => {
    const event = events.find(event => {
      return event === UserInformationsEvent.EDITED_SUCCESSFULLY
    });
    if (event) {
      dispatch(fetchEnterprises());
    }
  }, [dispatch, events]);

  const handleClose = () => {
    history.push(location.state.backgroundLocation)
    dispatch(hideModal());
  };

  const handleAssign = (orgId: string) => {
    dispatch(assignToEnterprise(userId, { enterprise_id: orgId }));
    handleClose()
  };

  if (!enterprises) return <></>;

  return (
    <Modal
      onClose={handleClose}
      width='450px'
      height='285px'
      visible
    >
      <div className={classes.container}>
        { enterprises.map(enterprise => {
          return (
            <div className={classes.row} key={enterprise.id}>
              <button 
                type='submit'
                className={`button ${classes.assignButton}`}
                onClick={() => handleAssign(enterprise.id)}
              >
                {enterprise.attributes.name}
              </button>
            </div>
          )
        })}          
      </div>
    </Modal>
  );
}