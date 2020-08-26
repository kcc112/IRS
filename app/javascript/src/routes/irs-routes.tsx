import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routes from './routes';
import { EnterprisesIndex } from '../components/enterprises/index';
import { UsersIndex } from '../components/users';
import { IssuesIndex } from '../components/issues';
import { CommentsIndex } from '../components/comments';
import defineAbilitiesFor from '../session/abilities';
import { Actions, Subjects } from '../session/redux/types';
import { CanRender } from './can-render';
import { selectCurrentUser } from '../session/redux/selectors';
import { Error404 } from '../errors/404';

export function IrsRoutes() {
  const location = useLocation();
  const currentUser = useSelector(selectCurrentUser);
  const abilities = defineAbilitiesFor(currentUser);

  if (!currentUser) return <></>

  return (
    <Switch location={location}>
      <Route
        exact
        path={routes.irs.enterprises.index}
        render={() =>
          <CanRender
            render={abilities.can(Actions.VIEW, Subjects.ENTERPRISES)}
            component={<EnterprisesIndex />}
          />
        }
      />
      <Route
        exact
        path={routes.irs.users.index}
        render={() =>
          <CanRender
            render={abilities.can(Actions.VIEW, Subjects.USERS)}
            component={<UsersIndex />}
          />
        }
      />
      <Route
        exact
        path={routes.irs.issues.index}
        render={() =>
          <CanRender
            render={abilities.can(Actions.VIEW, Subjects.ISSUES)}
            component={<IssuesIndex />}
          />
        }
      />
      <Route
        exact
        path={routes.irs.comments.index}
        render={() =>
          <CanRender
            render={abilities.can(Actions.VIEW, Subjects.COMMENTS)}
            component={<CommentsIndex />}
          />
        }
      />
      <Route render={() => <Error404 />}/>
    </Switch>
  );
}