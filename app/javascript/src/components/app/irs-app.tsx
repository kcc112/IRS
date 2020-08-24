import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { IrsLayout } from '../layout';
import routes from '../../routes/routes';
import { IrsRoutes } from '../../routes/irs-routes';

export function IrsApp() {
  return (
    <>
      <Switch>
        <Redirect exact from="/" to={routes.irs.root} />
        <Route path={routes.irs.root}>
          <IrsLayout
            routes={<IrsRoutes />}
          />
        </Route>
      </Switch>
    </>
  );
}