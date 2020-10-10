import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import { IssuesIndex } from '../../../redux/types';
import { useStyles } from './styles';
import { Tile } from '../tile/tile';

interface Props {
  issues: IssuesIndex[];
}

export function IssuesGridList({ 
  issues,
}: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={190} className={classes.gridList} cols={5}>
        {issues.map( issue => (
          <GridListTile key={issue.id} className={classes.gridListTile}>
            <Tile issue={issue} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}