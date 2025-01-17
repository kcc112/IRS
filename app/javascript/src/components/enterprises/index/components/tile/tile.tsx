import React from 'react';
import { useTranslation } from 'react-i18next';

import { EnterprisesIndex } from '../../../redux/types';
import { useStyles } from './styles';

interface Props {
  enterprise: EnterprisesIndex;
  onRedirectToEnterpriseEdit: (id: string) => void;
  onRedirectToEnterpriseDelete: (id: string) => void;
  onRedirectToEnterpriseShow: (id: string) => void;
}

export function Tile({ 
  enterprise,
  onRedirectToEnterpriseEdit,
  onRedirectToEnterpriseDelete,
  onRedirectToEnterpriseShow,
}: Props) {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.constainer}>
      <div className={classes.title}>
        {enterprise.attributes.name}
      </div>
      <div className={classes.description}>
        {enterprise.attributes.description}
      </div>
      <div className={classes.actionsContainer}>
        <button 
          type='button'
          className={`button ${classes.actionButton}`}
          onClick={() => onRedirectToEnterpriseEdit(enterprise.id)}
        >
          {t('Edit')}
        </button>
        <button 
          type='button'
          className={`button ${classes.actionButton}`}
          onClick={() => onRedirectToEnterpriseShow(enterprise.id)}
        >
          {t('Show')}
        </button>
        <button 
          type='button'
          className={`button ${classes.actionButton}`}
          onClick={() => onRedirectToEnterpriseDelete(enterprise.id)}
        >
          {t('Delete')}
        </button>
      </div>
    </div>
  );
}