import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { useTranslation } from 'react-i18next';

import { EnterprisesIndex } from '../../../redux/types';
import { useStyles } from './styles';

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
            <div>{enterprise.attributes.name}</div>
            <div>{enterprise.attributes.description}</div>
            <button 
              type='button'
              className={`button`}
              onClick={() => onRedirectToEnterpriseEdit(enterprise.id)}
            >
              {t('Edit')}
            </button>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}