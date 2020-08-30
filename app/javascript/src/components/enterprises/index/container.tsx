import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { fetchEnterprises } from './actions';
import { selectIndexEnterprises } from '../redux/selectors';
import { useStyles } from './styles';
import { EnterprisesGridList } from './components/grid-list';

export function EnterprisesIndex() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles({});
  const enterprises = useSelector(selectIndexEnterprises);

  useEffect(() => {
    dispatch(fetchEnterprises());
  }, [dispatch])

  if (!enterprises) return <></>;

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{t('Enterprises')}</h1>
      <EnterprisesGridList  enterprises={enterprises} />
    </div>
  );
}