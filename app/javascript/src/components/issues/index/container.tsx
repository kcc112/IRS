import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { compile } from 'path-to-regexp';
import { useHistory, useLocation } from 'react-router-dom';

import { fetchIssues, clearIssues, showModal } from './actions';
import { selectIssuesIndex, selectIssuesEvent } from '../redux/selectors';
import { useStyles } from './styles';
import { IssuesEvent } from '../redux/types';
import { removeEventFromAccumulator } from '../redux/actions';
import { IssuesGridList } from './components/grid-list/grid-list';
import routes from '../../../routes/routes';

export function IssuesIndex() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles({});
  const issues = useSelector(selectIssuesIndex);
  const events = useSelector(selectIssuesEvent);

  useEffect(() => {
    const event = events.find(event => {
      return event === IssuesEvent.CREATED_SUCCESSFULLY ||
                       IssuesEvent.ASSIGN_SUCCESSFULLY ||
                       IssuesEvent.REFRESH
    });
    if (event) {
      dispatch(fetchIssues());
      dispatch(removeEventFromAccumulator(event));
    }
  }, [dispatch, events]);
  
  useEffect(() => {
    dispatch(fetchIssues());
  }, [dispatch]);

  useEffect( () => () => {
    dispatch(clearIssues());
  }, [dispatch]);

  if (!issues) return <></>;

  const redirectToAssignToIssue = (id: string) => {
    history.push(compile(routes.irs.issues.assign)({ id: id }),{
      backgroundLocation: location,
    });
    dispatch(showModal());
  };

  const redirectToResolveIssue = (id: string) => {
    history.push(compile(routes.irs.issues.resolve)({ id: id }),{
      backgroundLocation: location,
    });
    dispatch(showModal());
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>{t('Issues')}</div>
      <IssuesGridList  
        issues={issues}
        onRedirectToAssignToIssue={redirectToAssignToIssue}
        onRedirectToResolveIssue={redirectToResolveIssue}
      />
    </div>
  );
}