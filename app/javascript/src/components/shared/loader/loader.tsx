import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useStyles } from './styles';

interface Props {
  visible: boolean;
}

export function Loader({ visible }: Props) {
  const classes = useStyles({});
  if (!visible) return <></>;

  return (
    <div className={classes.loaderBackdrop}>
      <div className={classes.loaderWrapper}>
        <CircularProgress className={classes.loader} />
      </div>
    </div>
  );
}