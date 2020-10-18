import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

import { useStyles } from './styles';

interface Props {
  onHandleClose: () => void;
}

export function CommentsListHeader({
  onHandleClose,
}: Props) {
  const classes = useStyles({});

  return (
    <div className={classes.container}>
      <button type="button" className={`button ${classes.closeButton}`} onClick={onHandleClose}>
        <CloseIcon />
      </button>
    </div>
  );
}