import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch, useSelector } from 'react-redux';
import { compile } from 'path-to-regexp';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

import { useStyles } from './styles';
import paths from '../../../../api/paths';
import routes from '../../../../routes/routes';
import { showModal } from './actions';
import { selectCurrentUser } from '../../../../session/redux/selectors';

export function Header() {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const redirectToCreateEnterprise = () => {
    history.push({
      pathname: routes.irs.enterprises.create,
      state: { backgroundLocation: location },
    });
    dispatch(showModal());
  };

  const redirectToEditUserInformations= () => {
    if (currentUser) {
      history.push({
        pathname: compile(routes.irs.usersInformations.edit)({id:  currentUser.userInformationsId}),
        state: { backgroundLocation: location },
      });
      dispatch(showModal());
    }
  };

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
        <button type="button" className={'button'}  onClick={redirectToEditUserInformations}>
          <PermIdentityIcon />
        </button>
        <a rel="nofollow" data-method="delete" href={paths.devise.delete}>
          <ExitToAppIcon />
        </a>
      </div>
    </div>
  );
}