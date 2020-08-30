import React from 'react';
import { useTranslation } from 'react-i18next';
import GroupIcon from '@material-ui/icons/Group';
import BusinessIcon from '@material-ui/icons/Business';
import BugReportIcon from '@material-ui/icons/BugReport';

import { useStyles } from './styles';
import routes from '../../../../routes/routes';
import { resolveIsActive } from './helpers';
import { useLocation } from 'react-router-dom';

export function Sidebar() {
  const classes = useStyles();
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
     <div className={`${classes.actionContainer} ${resolveIsActive('enterprises', location.pathname) ? classes.actionContainerActive : ''}`}>
        <a className={classes.action} data-method="get" href={routes.irs.enterprises.index}>
          <div><BusinessIcon /></div>
          <div className={classes.text}>{t('Enterprises')}</div>
        </a>
     </div>
     <div className={`${classes.actionContainer} ${resolveIsActive('users', location.pathname) ? classes.actionContainerActive : ''}`}>
        <a className={classes.action} data-method="get" href={routes.irs.users.index}>
          <div><GroupIcon /></div>
          <div className={classes.text}>{t('Users')}</div>
        </a>
     </div>
     <div className={`${classes.actionContainer} ${resolveIsActive('issues', location.pathname) ? classes.actionContainerActive : ''}`}>
        <a className={classes.action} data-method="get" href={routes.irs.issues.index}>
          <div><BugReportIcon /></div>
          <div className={classes.text}>{t('Issues')}</div>
        </a>
     </div>
    </div>
  );
}