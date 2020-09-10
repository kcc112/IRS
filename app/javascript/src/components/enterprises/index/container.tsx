import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { compile } from 'path-to-regexp';

import { fetchEnterprises, clearEnterprises } from './actions';
import { selectIndexEnterprises, selectEnterpriseEvent } from '../redux/selectors';
import { useStyles } from './styles';
import { EnterprisesGridList } from './components/grid-list';
import { EnterpriseEvent } from '../redux/types';
import { removeEventFromAccumulator } from '../redux/actions';
import { AppLocation } from '../../../app/types';
import routes from '../../../routes/routes';
import { showModal } from '../../layout/components/header/actions';

export function EnterprisesIndex() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation<AppLocation>();
  const classes = useStyles({});
  const enterprises = useSelector(selectIndexEnterprises);
  const events = useSelector(selectEnterpriseEvent);

  useEffect(() => {
    const event = events.find(event => {
      return event === EnterpriseEvent.CREATED_SUCCESSFULLY ||
        EnterpriseEvent.EDITED_SUCCESSFULLY ||
        EnterpriseEvent.DELETED_SUCCESSFULLY ||
        EnterpriseEvent.REFRESH
    });
    if (event) {
      dispatch(fetchEnterprises());
      dispatch(removeEventFromAccumulator(event));
    }
  }, [dispatch, event]);

  useEffect(() => {
    if (enterprises.length === 0) dispatch(fetchEnterprises());
  }, [dispatch, enterprises])

  useEffect( () => () => {
    dispatch(clearEnterprises());
  }, [dispatch]);

  const redirectToEnterpriseEdit = (id: string) => {
    history.push(compile(routes.irs.enterprises.edit)({ id: id }),{
      backgroundLocation: location,
    });
    dispatch(showModal());
  };

  const redirectToEnterpriseDelete = (id: string) => {
    history.push(compile(routes.irs.enterprises.delete)({ id: id }),{
      backgroundLocation: location,
    });
    dispatch(showModal());
  };

  const redirectToEnterpriseShow = (id: string) => {
    history.push(compile(routes.irs.enterprises.show)({ id: id }),{
      backgroundLocation: location,
    });
    dispatch(showModal());
  };

  if (!enterprises) return <></>;

  return (
    <div className={classes.container}>
      <div className={classes.title}>{t('Enterprises')}</div>
      <EnterprisesGridList  
        enterprises={enterprises}
        onRedirectToEnterpriseEdit={redirectToEnterpriseEdit}
        onRedirectToEnterpriseDelete={redirectToEnterpriseDelete}
        onRedirectToEnterpriseShow={redirectToEnterpriseShow}
      />
    </div>
  );
}