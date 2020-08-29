import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { IrsLayout } from '../layout';
import routes from '../../routes/routes';
import { IrsRoutes } from '../../routes/irs-routes';
import { fetchCurrentUser } from './actions';
import { selectCurrentUser } from '../../session/redux/selectors';
import { selectLoaderState } from './redux/selectors';

export function IrsApp() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isLoading = useSelector(selectLoaderState);

  useEffect(() => {
    if (!currentUser) dispatch(fetchCurrentUser());
  }, [dispatch, currentUser]);

  return (
    <>
      <Switch>
        <Redirect exact from="/" to={routes.irs.root} />
        <Route path={routes.irs.root}>
          <IrsLayout
            routes={<IrsRoutes />}
            isLoading={isLoading}
          />
        </Route>
      </Switch>
    </>
  );
}