import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import { useSelector } from 'react-redux';

import routes from './routes';
import { EnterprisesIndex } from '../components/enterprises/index';
import { UsersInformationsIndex } from '../components/users-informations/index';
import { IssuesIndex } from '../components/issues/index';
import { CommentsIndex } from '../components/comments';
import defineAbilitiesFor from '../session/abilities';
import { Actions, Subjects } from '../session/redux/types';
import { CanRender } from './can-render';
import { selectCurrentUser } from '../session/redux/selectors';
import { Error404 } from '../errors/404';
import { selectShowModal } from '../components/app/redux/selectors';
import { EnterpriseCreateEdit } from '../components/enterprises/create-edit';
import { AppLocation } from '../app/types';
import { EnterpriseDelete } from '../components/enterprises/delete';
import { EnterpriseShow } from '../components/enterprises/show';
import { UserInformationsEdit } from '../components/users-informations/edit';
import { Home } from '../components/home';
import { IssueCreateEdit } from '../components/issues/create-edit/container';
import { AssignToIssue } from '../components/issues/assign/container';
import { ResolveIssue } from '../components/issues/resolve';
import { IssueShow } from '../components/issues/show';

export function IrsRoutes() {
  const location = useLocation<AppLocation>();
  const currentUser = useSelector(selectCurrentUser);
  const abilities = defineAbilitiesFor(currentUser);
  const showModal: boolean = useSelector(selectShowModal);

  const resolveBackgroundPath = () => {
    return showModal && location.state && location.state.backgroundLocation
      ? location.state.backgroundLocation
      : location;
  };

  const hasbackgroundLocation = () => location.state && location.state.backgroundLocation;

  if (!currentUser) return <></>

  return (
    <>
      <Switch location={resolveBackgroundPath()}>
        <Route
          exact
          path={routes.irs.root}
          render={() =>
            <CanRender
              render={abilities.can(Actions.VIEW, Subjects.HOME)}
              component={<Home />}
            />
          }
        />
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
          path={routes.irs.usersInformations.index}
          render={() =>
            <CanRender
              render={abilities.can(Actions.VIEW, Subjects.USERS_INFORMATIONS)}
              component={<UsersInformationsIndex />}
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
      <TransitionGroup>
        <Switch location={location}>
          {(showModal || hasbackgroundLocation()) && (
            <Route 
              exact
              path={routes.irs.enterprises.create}
              render={() =>
                <CanRender
                  render={abilities.can(Actions.CREATE, Subjects.ENTERPRISE)}
                  component={<EnterpriseCreateEdit />}
                />
              }
            />
          )}
          {(showModal || hasbackgroundLocation()) && (
            <Route 
              exact
              path={routes.irs.enterprises.edit}
              render={() =>
                <CanRender
                  render={abilities.can(Actions.EDIT, Subjects.ENTERPRISE)}
                  component={<EnterpriseCreateEdit />}
                />
              }
            />
          )}
           {(showModal || hasbackgroundLocation()) && (
            <Route 
              exact
              path={routes.irs.enterprises.delete}
              render={() =>
                <CanRender
                  render={abilities.can(Actions.DELETE , Subjects.ENTERPRISE)}
                  component={<EnterpriseDelete />}
                />
              }
            />
          )}
          {(showModal || hasbackgroundLocation()) && (
            <Route 
              exact
              path={routes.irs.enterprises.show}
              render={() =>
                <CanRender
                  render={abilities.can(Actions.VIEW , Subjects.ENTERPRISE)}
                  component={<EnterpriseShow />}
                />
              }
            />
          )}
           {(showModal || hasbackgroundLocation()) && (
            <Route 
              exact
              path={routes.irs.usersInformations.edit}
              render={() =>
                <CanRender
                  render={abilities.can(Actions.EDIT , Subjects.USER_INFORMATIONS)}
                  component={<UserInformationsEdit />}
                />
              }
            />
          )}
          {(showModal || hasbackgroundLocation()) && (
            <Route 
              exact
              path={routes.irs.issues.create}
              render={() =>
                <CanRender
                  render={abilities.can(Actions.CREATE, Subjects.ISSUE)}
                  component={<IssueCreateEdit />}
                />
              }
            />
          )}
          {(showModal || hasbackgroundLocation()) && (
            <Route 
              exact
              path={routes.irs.issues.edit}
              render={() =>
                <CanRender
                  render={abilities.can(Actions.EDIT, Subjects.ISSUE)}
                  component={<IssueCreateEdit />}
                />
              }
            />
          )}
          {(showModal || hasbackgroundLocation()) && (
            <Route 
              exact
              path={routes.irs.issues.assign}
              render={() =>
                <CanRender
                  render={abilities.can(Actions.ASSIGN, Subjects.ISSUE)}
                  component={<AssignToIssue />}
                />
              }
            />
          )}
          {(showModal || hasbackgroundLocation()) && (
            <Route 
              exact
              path={routes.irs.issues.resolve}
              render={() =>
                <CanRender
                  render={abilities.can(Actions.RESOLVE, Subjects.ISSUE)}
                  component={<ResolveIssue />}
                />
              }
            />
          )}
           {(showModal || hasbackgroundLocation()) && (
            <Route 
              exact
              path={routes.irs.issues.show}
              render={() =>
                <CanRender
                  render={abilities.can(Actions.VIEW, Subjects.ISSUE)}
                  component={<IssueShow />}
                />
              }
            />
          )}
        </Switch>
      </TransitionGroup>
    </>
  );
}