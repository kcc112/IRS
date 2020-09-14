import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useHistory } from 'react-router-dom';
import GroupIcon from '@material-ui/icons/Group';
import BusinessIcon from '@material-ui/icons/Business';
import BugReportIcon from '@material-ui/icons/BugReport';

import { useStyles } from './styles';
import routes from '../../../../routes/routes';
import { resolveIsActive } from './helpers';

export function Sidebar() {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const { t } = useTranslation();

  const redirectToEnterpriseIndex = () => {
    history.push(routes.irs.enterprises.index);
  };

  const redirectToIssuesIndex = () => {
    history.push(routes.irs.issues.index);
  };

  const redirectToUsersIndex = () => {
    history.push(routes.irs.usersInformations.index);
  };

  return (
    <div className={classes.container}>
     <div className={`${classes.actionContainer} ${resolveIsActive('enterprises', location.pathname) ? classes.actionContainerActive : ''}`}>
        <button className={`button ${classes.action}`} onClick={redirectToEnterpriseIndex}>
          <div><BusinessIcon /></div>
          <div className={classes.text}>{t('Enterprises')}</div>
        </button>
     </div>
     <div className={`${classes.actionContainer} ${resolveIsActive('users', location.pathname) ? classes.actionContainerActive : ''}`}>
        <button className={`button ${classes.action}`} onClick={redirectToUsersIndex}>
          <div><GroupIcon /></div>
          <div className={classes.text}>{t('Users')}</div>
        </button>
     </div>
     <div className={`${classes.actionContainer} ${resolveIsActive('issues', location.pathname) ? classes.actionContainerActive : ''}`}>
        <button className={`button ${classes.action}`} onClick={redirectToIssuesIndex}>
          <div><BugReportIcon /></div>
          <div className={classes.text}>{t('Issues')}</div>
        </button>
     </div>
    </div>
  );
}