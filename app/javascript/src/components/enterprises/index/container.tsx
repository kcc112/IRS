import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { fetchEnterprises } from './actions';
import { selectIndexEnterprises } from '../redux/selectors';
import { useStyles } from './styles';

export function EnterprisesIndex() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const classes = useStyles({});
  const enterprises = useSelector(selectIndexEnterprises);

  useEffect(() => {
    dispatch(fetchEnterprises());
  }, [dispatch])

  return (
    <div className={classes.container}>
      <h1>{t('Enterprises')}</h1>
      { enterprises && enterprises.map(enterprise => (
          <div key={enterprise.id}>
            <div>{enterprise.attributes.name}</div>
            <div>{enterprise.attributes.description}</div>
          </div>
        ))
      }
    </div>
  );
}