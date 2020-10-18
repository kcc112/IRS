import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { IssuesIndex, IssueStatus } from '../../../redux/types';
import { useStyles } from './styles';
import { selectCurrentUser } from '../../../../../session/redux/selectors';
import defineAbilitiesFor from '../../../../../session/abilities';
import { Actions, Subjects } from '../../../../../session/redux/types';

interface Props {
  issue: IssuesIndex;
  onRedirectToAssignToIssue: (id: string) => void;
  onRedirectToResolveIssue: (id: string) => void;
  onRedirectToEditIssue: (id: string) => void;
  onRedirectToShowIssue: (id: string) => void;
  onRedirectToIssueComments: (id: string) => void;
}

export function Tile({ 
  issue,
  onRedirectToAssignToIssue,
  onRedirectToResolveIssue,
  onRedirectToEditIssue,
  onRedirectToShowIssue,
  onRedirectToIssueComments,
}: Props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const currentUser = useSelector(selectCurrentUser);
  const abilities = defineAbilitiesFor(currentUser);

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
        <div className={classes.userName}>
          {`${t('Reported by')}: ${issue.attributes.reportedBy.userName} ${issue.attributes.reportedBy.userSurname}`}
        </div>
      </div>
      <div className={classes.tileRow}>
        <div>
          {`${t('Status')}: `}
        </div>
        <div className={classes.status}>
          {issue.attributes.issueStatus}
        </div>
      </div>
      <div className={classes.actionsContainer}>
        { (abilities.can(Actions.EDIT, Subjects.ISSUE) && issue.attributes.reportedBy.userId === currentUser.id) && (
          <button 
            type='button'
            className={`button ${classes.actionButton}`}
            onClick={() => onRedirectToEditIssue(issue.id)}
          >
            {t('Edit')}
          </button>
        )}
        { (abilities.can(Actions.ASSIGN, Subjects.ISSUE) &&
           issue.attributes.issueStatus === IssueStatus.UNASSIGNED) && (
          <button 
            type='button'
            className={`button ${classes.actionButton}`}
            onClick={() => onRedirectToAssignToIssue(issue.id) }
          >
           {t('Assign to me')}
          </button>
        )}
         { (abilities.can(Actions.RESOLVE, Subjects.ISSUE) && 
            issue.attributes.assignedTo &&
            issue.attributes.assignedTo.userId === currentUser.id &&
            issue.attributes.issueStatus === IssueStatus.ASSIGNED) && (
          <button 
            type='button'
            className={`button ${classes.actionButton}`}
            onClick={() => onRedirectToResolveIssue(issue.id) }
          >
           {t('Resolve')}
          </button>
        )}
        <button 
          type='button'
          className={`button ${classes.actionButton}`}
          onClick={() => onRedirectToShowIssue(issue.id)}
        >
          {t('Show')}
        </button>
        <button 
          type='button'
          className={`button ${classes.actionButton}`}
          onClick={() => onRedirectToIssueComments(issue.id)}
        >
          {t('Comments')}
        </button>
      </div>
    </div>
  );
}