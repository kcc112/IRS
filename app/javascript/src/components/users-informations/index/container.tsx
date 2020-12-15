import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { compile } from 'path-to-regexp';

import { useStyles } from './styles';
import { selectUsersInformations, selectUserInformationsEvent } from '../redux/selectors';
import { UserInformationsEvent } from '../redux/types';
import { fetchUsersInformations, clearUsersInformations, editRole, activateUser, deactivateUser, showModal } from './actions';
import { removeEventFromAccumulator } from '../redux/actions';
import { SimpleTable } from './components/table-list/table-list';
import routes from '../../../routes/routes';
import { AppLocation } from '../../../app/types';

export function UsersInformationsIndex() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles({});
  const location = useLocation<AppLocation>();
  const history = useHistory();
  const usersInformations = useSelector(selectUsersInformations);
  const events = useSelector(selectUserInformationsEvent);

  useEffect(() => {
    const event = events.find(event => {
      return event === UserInformationsEvent.EDITED_SUCCESSFULLY ||
        UserInformationsEvent.REFRESH
    });
    if (event) {
      dispatch(fetchUsersInformations());
      dispatch(removeEventFromAccumulator(event));
    }
  }, [dispatch, events]);

  useEffect(() => {
    if (usersInformations.length === 0) dispatch(fetchUsersInformations());
  }, [dispatch, usersInformations])

  useEffect(() => () => {
    dispatch(clearUsersInformations());
  }, [dispatch]);

  const handleEditRole = (value: string, userId: string) => {
    dispatch(editRole(userId, value));
  };

  const handleActivateUser = (id: string, callback: () => void) => {
    dispatch(activateUser(id, callback));
  };

  const handleDeactivateUser = (id: string, callback: () => void) => {
    dispatch(deactivateUser(id, callback));
  };

  const redirectToAssignUser = (id: string) => {
    history.push(compile(routes.irs.users.assign)({ id: id }),{
      backgroundLocation: location,
    });
    dispatch(showModal());
  };

  if (!usersInformations) return <></>;

  return (
    <div className={classes.container}>
      <div className={classes.title}>{t('Users')}</div>
      <SimpleTable
        usersInformations={usersInformations}
        onHandleEditRole={handleEditRole}
        onHandleDeactivateUser={handleDeactivateUser}
        onHandleActivateUser={handleActivateUser}
        onRedirectToAssignUser={redirectToAssignUser}
      />
    </div>
  );
}