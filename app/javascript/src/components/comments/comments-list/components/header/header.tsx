import React from 'react';
import { useTranslation } from 'react-i18next';
import CloseIcon from '@material-ui/icons/Close';

import { useStyles } from './styles';

interface Props {
  onHandleClose: () => void;
}

export function CommentsListHeader({
  onHandleClose,
}: Props) {
  const classes = useStyles({});
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <div className={classes.title}>{t`Comments`}</div>
      <button type="button" className={`button ${classes.closeButton}`} onClick={onHandleClose}>
        <CloseIcon />
      </button>
    </div>
  );
}