import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, matchPath, useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { useStyles } from './styles';
import { Modal } from '../../shared/modal/container';
import { AppLocation } from '../../../app/types';
import { CreateEditHeader } from './components/header';
import { FormContainer } from './components/form';
import { 
  hideModal,
  fetchIssue,
  clearIssue,
  createIssue,
  editIssue,
  issuesTypesFetch
} from './actions';
import routes from '../../../routes/routes';
import { IssueEditCreateFormObject } from './types';
import { selectIssuesTypes } from '../redux/selectors';

interface PathParams {
  id?: string;
}

export function IssueCreateEdit() {
  const { t } = useTranslation();
  const classes = useStyles({});
  const history = useHistory();
  const dispatch = useDispatch();
  const match = useRouteMatch<PathParams>();
  const location = useLocation<AppLocation>();
  const issuseTypes = useSelector(selectIssuesTypes);
  const [issueId] = useState<string | undefined>(match && match.params.id ? match.params.id : undefined);

  useEffect(() => {
    if (issuseTypes.length === 0) dispatch(issuesTypesFetch());
  }, [dispatch, issuseTypes])

  useEffect(() => {
    const edit = matchPath(location.pathname, { path: routes.irs.issues.edit, exact: true });
    if (edit !== null && issueId) {
      dispatch(fetchIssue(issueId));
    }
  }, [dispatch, location.pathname, issueId, issuseTypes]);

  useEffect(() => () => {
    dispatch(clearIssue());
  }, [dispatch]);

  const handleClose = () => {
    history.push(location.state.backgroundLocation)
    dispatch(hideModal());
  };

  const resolveLocation = (): string => {
    const edit = matchPath(location.pathname, { path: routes.irs.issues.edit, exact: true });
    const create = matchPath(location.pathname, { path: routes.irs.issues.create, exact: true });
    if (edit !== null) return t('Issue edit');
    if (create !== null) return t('issue create');
  };

  const handleSubmit = (formObject: IssueEditCreateFormObject) => {
    const edit = matchPath(location.pathname, { path: routes.irs.issues.edit, exact: true });
    const create = matchPath(location.pathname, { path: routes.irs.issues.create, exact: true });
    if (create !== null) dispatch(createIssue(formObject));
    if (edit !== null && issueId) dispatch(editIssue({ id: issueId, formObject: formObject }));
    handleClose();
  };

  return (
    <Modal
      onClose={handleClose}
      width='450px'
      visible
    >
      <div className={classes.container}>
        <section>
          <CreateEditHeader
            title={resolveLocation()}
            onHandleClose={handleClose}
          />
        </section>
        <section>
          <FormContainer
            onHandleSubmit={handleSubmit}
          />
        </section>
      </div>
    </Modal>
  );
}