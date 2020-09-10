import React from 'react';

import { useStyles } from './styles';

interface Props {
  description: string;
}

export function EnterpriseShowBody({
  description,
}: Props) {
  const classes = useStyles({});

  return (
    <div className={classes.container}>
      <div className={classes.description}>{description}</div>
    </div>
  );
}