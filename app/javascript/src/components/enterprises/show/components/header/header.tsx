import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

import { useStyles } from './styles';

interface Props {
  name: string;
  onHandleClose: () => void;
}

export function EnterpriseShowHeader({
  name,
  onHandleClose,
}: Props) {
  const classes = useStyles({});

  return (
    <div className={classes.container}>
      <div className={classes.name}>{name}</div>
      <div>
        <button type="button" className={`button ${classes.closeButton}`} onClick={onHandleClose}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}