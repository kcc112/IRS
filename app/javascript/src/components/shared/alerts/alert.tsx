import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@material-ui/icons/Close';

import { useStyles } from './styles';
import { selectAlert } from '../../app/redux/selectors';
import { hideAlert } from '../../app/redux/actions';
import { AlertType } from './types';

export function Alert() {
  const classes = useStyles({});
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const alert = useSelector(selectAlert);

  const onClose = () => {
    dispatch(hideAlert());
  }

  return (
    <div className={`
      ${classes.container}
      ${alert.type === AlertType.ERROR ? classes.error : ''}
      ${alert.type === AlertType.SUCCESS ? classes.success : ''}
    `}>
      <div className={classes.message}>{t(alert.message)}</div>
      <div className={classes.actionContainer}>
        <button type='button' className={`button ${classes.closeButton}`} onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}