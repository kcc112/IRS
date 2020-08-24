import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import routes from './routes';
import { EnterprisesIndex } from '../components/enterprises';
import { UsersIndex } from '../components/users';
import { IssuesIndex } from '../components/issues';
import { CommentsIndex } from '../components/comments';

export function IrsRoutes() {
  const location = useLocation();
  return (
    <>
      <Switch location={location}>
        <Route
          exact
          path={routes.irs.enterprises.index}
          render={() => <EnterprisesIndex />}
        />
        <Route
          exact
          path={routes.irs.users.index}
          render={() => <UsersIndex />}
        />
        <Route
          exact
          path={routes.irs.issues.index}
          render={() => <IssuesIndex />}
        />
        <Route
          exact
          path={routes.irs.comments.index}
          render={() => <CommentsIndex />}
        />
      </Switch>
    </>
  );
}