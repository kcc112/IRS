import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { fetchEnterprises, clearEnterprises } from './actions';
import { selectIndexEnterprises } from '../redux/selectors';
import { useStyles } from './styles';
import { EnterprisesGridList } from './components/grid-list';

export function EnterprisesIndex() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles({});
  const enterprises = useSelector(selectIndexEnterprises);

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