import React from 'react';

import { IssuesIndex } from '../../../redux/types';
import { useStyles } from './styles';

interface Props {
  issue: IssuesIndex;
}

export function Tile({ 
  issue,
}: Props) {
  const classes = useStyles();

  return (
    <div className={classes.constainer}>
      <div className={classes.title}>
        {issue.attributes.issueType}
      </div>
      <div className={classes.description}>
        {issue.attributes.description}
      </div>
    </div>
  );
}