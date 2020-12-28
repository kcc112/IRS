import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import { IssuesIndex } from '../../../redux/types';
import { useStyles } from './styles';
import { Tile } from '../tile/tile';

interface Props {
  issues: IssuesIndex[];
  onRedirectToAssignToIssue: (id: string) => void;
  onRedirectToResolveIssue: (id: string) => void;
  onRedirectToEditIssue: (id: string) => void;
  onRedirectToShowIssue: (id: string) => void;
  onRedirectToIssueComments: (id: string) => void;
}

export function IssuesGridList({ 
  issues,
  onRedirectToAssignToIssue,
  onRedirectToResolveIssue,
  onRedirectToEditIssue,
  onRedirectToShowIssue,
  onRedirectToIssueComments,
}: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={205} className={classes.gridList} cols={5}>
        {issues.map( issue => (
          <GridListTile key={issue.id} className={classes.gridListTile}>
            <Tile 
              issue={issue}
              onRedirectToAssignToIssue={onRedirectToAssignToIssue}
              onRedirectToResolveIssue={onRedirectToResolveIssue}
              onRedirectToEditIssue={onRedirectToEditIssue}
              onRedirectToShowIssue={onRedirectToShowIssue}
              onRedirectToIssueComments={onRedirectToIssueComments}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}