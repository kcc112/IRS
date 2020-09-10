import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { useTranslation } from 'react-i18next';

import { EnterprisesIndex } from '../../../redux/types';
import { useStyles } from './styles';
import { Tile } from '../tile/tile';

interface Props {
  enterprises: EnterprisesIndex[];
  onRedirectToEnterpriseEdit: (id: string) => void;
}

export function EnterprisesGridList({ 
  enterprises,
  onRedirectToEnterpriseEdit,
}: Props) {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={5}>
        {enterprises.map( enterprise => (
          <GridListTile key={enterprise.id} className={classes.gridListTile}>
            <Tile 
              enterprise={enterprise}
              onRedirectToEnterpriseEdit={onRedirectToEnterpriseEdit}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}