import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { fetchEnterprises, clearEnterprises } from './actions';
import { selectIndexEnterprises, selectEnterpriseEvent } from '../redux/selectors';
import { useStyles } from './styles';
import { EnterprisesGridList } from './components/grid-list';
import { EnterpriseEvent } from '../redux/types';
import { removeEventFromAccumulator } from '../redux/actions';

export function EnterprisesIndex() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles({});
  const enterprises = useSelector(selectIndexEnterprises);
  const events = useSelector(selectEnterpriseEvent);

  useEffect(() => {
    const event = events.find(event => event === EnterpriseEvent.CREATED_SUCCESSFULLY);
    if (event) {
      dispatch(fetchEnterprises());
      dispatch(removeEventFromAccumulator(event));
    }
  }, [dispatch, event])


  useEffect(() => {
    if (enterprises.length === 0) dispatch(fetchEnterprises());
  }, [dispatch, enterprises])

  useEffect( () => () => {
    dispatch(clearEnterprises());
  }, [dispatch])

  if (!enterprises) return <></>;

  return (
    <div className={classes.container}>
      <div className={classes.title}>{t('Enterprises')}</div>
      <EnterprisesGridList  enterprises={enterprises} />
    </div>
  );
}