import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { useStyles } from './styles';
import paths from '../../../../api/paths';

export function Header() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <div className={classes.title}>
          IRS
        </div>
      </div>
      <div className={classes.logout}>
        <a rel="nofollow" data-method="delete" href={paths.devise.delete}>
          <ExitToAppIcon />
        </a>
      </div>
    </div>
  );
}