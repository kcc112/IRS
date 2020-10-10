import React from 'react';
import { useTranslation } from 'react-i18next';

import { IssuesIndex } from '../../../redux/types';
import { useStyles } from './styles';

interface Props {
  issue: IssuesIndex;
}

export function Tile({ 
  issue,
}: Props) {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div className={classes.constainer}>
      <div className={classes.title}>
        {issue.attributes.issueType}
      </div>
      <div className={classes.tileRow}>
        {`${t('Created at')}: ${issue.attributes.createdAt}`}
      </div>
      <div className={classes.tileRow}>
        {`${t('Last updated')}: ${issue.attributes.updatedAt}`}
      </div>
      <div className={classes.tileRow}>
        {`${t('Reported by')}: ${issue.attributes.reportedBy.userName} ${issue.attributes.reportedBy.userName}`}
      </div>
      <div className={classes.tileRow}>
        <div>
          {`${t('Status')}: `}
        </div>
        <div className={classes.status}>
          {issue.attributes.issueStatus}
        </div>
      </div>
    </div>
  );
}