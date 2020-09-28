import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { fetchIssues, clearIssues } from './actions';
import { selectIssuesIndex, selectIssuesEvent } from '../redux/selectors';
import { useStyles } from './styles';
import { IssuesEvent } from '../redux/types';
import { removeEventFromAccumulator } from '../redux/actions';
import { IssuesGridList } from './components/grid-list/grid-list';

export function IssuesIndex() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles({});
  const issues = useSelector(selectIssuesIndex);
  const events = useSelector(selectIssuesEvent);

  useEffect(() => {
    const event = events.find(event => {
      return event === IssuesEvent.CREATED_SUCCESSFULLY
    });
    if (event) {
      dispatch(fetchIssues());
      dispatch(removeEventFromAccumulator(event));
    }
  }, [dispatch, events]);

  useEffect(() => {
    if (issues.length === 0) dispatch(fetchIssues());
  }, [dispatch, issues])

  useEffect( () => () => {
    dispatch(clearIssues());
  }, [dispatch]);

  if (!issues) return <></>;

  return (
    <div className={classes.container}>
      <div className={classes.title}>{t('Issues')}</div>
      <IssuesGridList  
        issues={issues}
      />
    </div>
  );
}