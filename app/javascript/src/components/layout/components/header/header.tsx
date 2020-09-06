import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';

import { useStyles } from './styles';
import paths from '../../../../api/paths';
import routes from '../../../../routes/routes';
import { showModal } from './actions';

export function Header() {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const redirectToCreateEnterprise = () => {
    history.push({
      pathname: routes.irs.enterprises.create,
      state: { backgroundLocation: location },
    });
    dispatch(showModal());
  }

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <div className={classes.title}>
          IRS
        </div>
      </div>
      <div className={classes.logout}>
        <button type="button" className={'button'}  onClick={redirectToCreateEnterprise}>
          <AddIcon />
        </button>
        <a rel="nofollow" data-method="delete" href={paths.devise.delete}>
          <ExitToAppIcon />
        </a>
      </div>
    </div>
  );
}