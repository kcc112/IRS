import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Snackbar } from '@material-ui/core';

import { useStyles } from './styles';
import { selectAlert } from '../../app/redux/selectors';
import { hideAlert } from '../../app/redux/actions';
import Alert from '@material-ui/lab/Alert/Alert';

export function AlertIrs() {
  const classes = useStyles({});
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const alert = useSelector(selectAlert);

  const onClose = () => {
    dispatch(hideAlert());
  }

  return (
    <Snackbar
      className={classes.alert}
      open={alert.message.length > 0}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={4000}
      onClose={onClose}
    >
      <Alert variant="filled" onClose={onClose} severity={alert.type}>
          {t(alert.message)}
      </Alert>
    </Snackbar>
  );
}