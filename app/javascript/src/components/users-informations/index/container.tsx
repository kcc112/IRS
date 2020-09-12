import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { AppLocation } from '../../../app/types';
import { useStyles } from './styles';
import { selectUsersInformations, selectUserInformationsEvent } from '../redux/selectors';
import { UserInformationsEvent } from '../redux/types';
import { fetchUsersInformations, clearUsersInformations } from './actions';
import { removeEventFromAccumulator } from '../redux/actions';

export function UsersInformationsIndex() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation<AppLocation>();
  const classes = useStyles({});
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
  }, [dispatch, event]);

  useEffect(() => {
    if (usersInformations.length === 0) dispatch(fetchUsersInformations());
  }, [dispatch, usersInformations])

  useEffect( () => () => {
    dispatch(clearUsersInformations());
  }, [dispatch]);

  if (!usersInformations) return <></>;

  return (
    <div className={classes.container}>
      <div className={classes.title}>{t('Users')}</div>
      { usersInformations.map( (userInformations, index ) => {
          return (
            <div key={userInformations.id}>
              {`${index} ${userInformations.attributes.name} ${userInformations.attributes.surname}`}
              <div>
                {userInformations.attributes.email}
              </div>
              <div>
                {userInformations.attributes.role}
              </div>
              <div>
                {userInformations.attributes.createdAt}
              </div>
              <div>
                {userInformations.attributes.enterpriseId}
              </div>
              <div>
                {userInformations.attributes.enterpriseName}
              </div>
            </div>
          );
        })
      }
    </div>
  );
}