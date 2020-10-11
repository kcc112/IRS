import React from 'react';

import { useStyles } from './styles';
import { IssueShow } from '../../../redux/types';
import { useTranslation } from 'react-i18next';

interface Props {
  issue: IssueShow;
}

export function IssueShowBody({
  issue,
}: Props) {
  const classes = useStyles({});
  const { t } = useTranslation();

  if (!issue) return <></>;

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.row}>
          <div>{`${t('Last updated')}: ${issue.attributes.updatedAt}`}</div>
        </div>
        <div className={classes.row}>
          <div>
            {`${t('Created at')}: ${issue.attributes.createdAt}`}
          </div>
        </div>
        <div className={classes.statusContainer}>
          <div>
            {`${t('Status')}: `}
          </div>
          <div className={classes.status}>
            {issue.attributes.issueStatus}
          </div>
        </div>
        { issue.attributes.assignedTo && (
          <div className={classes.row}>
            <div className={classes.userContainer}>
              <div className={classes.assignedTo}>
                {`${t('Assigned to')}: ${issue.attributes.assignedTo.userName ? issue.attributes.assignedTo.userName : ''} ${issue.attributes.assignedTo.userSurname ? issue.attributes.assignedTo.userSurname : ''}`}
              </div>
            </div>
          </div>
        )}
        <div className={classes.row}>
          <div className={classes.userContainer}>
            <div className={classes.reportedBy}>
              {`${t('Reported by')}: ${issue.attributes.reportedBy.userName ? issue.attributes.reportedBy.userName : ''} ${issue.attributes.reportedBy.userSurname ? issue.attributes.reportedBy.userSurname : ''}`}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.description}>
          {issue.attributes.description}
        </div>
      </div>
    </div>
  );
}