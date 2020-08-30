import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import { EnterprisesIndex } from '../../../redux/types';
import { useStyles } from './styles';

interface Props {
  enterprises: EnterprisesIndex[];
}

export function EnterprisesGridList({ enterprises }: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={5}>
        {enterprises.map( enterprise => (
          <GridListTile key={enterprise.id} className={classes.gridListTile}>
            <div>{enterprise.attributes.name}</div>
            <div>{enterprise.attributes.description}</div>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}