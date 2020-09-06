import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

import { useStyles } from './styles';

interface Props {
  title: string;
  onHandleClose: () => void;
}

export function CreateEditHeader({
  title,
  onHandleClose,
}: Props) {
  const classes = useStyles({});

  return (
    <div className={classes.container}>
      <div className={classes.title}>{title}</div>
      <div>
        <button type="button" className={`button ${classes.closeButton}`} onClick={onHandleClose}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}