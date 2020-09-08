import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@material-ui/icons/Close';

import { useStyles } from './styles';
import { selectAlertMessage } from '../../app/redux/selectors';
import { hideAlert } from '../../app/redux/actions';

export function Alert() {
  const classes = useStyles({});
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const message = useSelector(selectAlertMessage);

  const onClose = () => {
    dispatch(hideAlert());
  }

  return (
    <div className={classes.container}>
      <div className={classes.message}>{t(message)}</div>
      <div className={classes.actionContainer}>
        <button type='button' className={`button ${classes.closeButton}`} onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}