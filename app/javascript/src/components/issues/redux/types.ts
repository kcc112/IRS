import { IResponseBase } from '../../../api/types';

export interface IssuesState {
  entities: {
    issues: IssuesIndex[];
    issue: IssueShow;
  },
  eventAccumulator: IssuesEvent[];
}

export interface IssueShow extends IResponseBase {
  attributes: {
    issueType: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    reportedBy: {
      userId: string;
      userName: string;
      userSurname: string;
    };
    assignedTo: {
      userId: string;
      userName: string;
      userSurname: string;
    };
  }
}

export interface IssuesIndex extends IResponseBase {
  attributes: {
    issueType: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    reportedBy: {
      userId: string;
      userName: string;
      userSurname: string;
    };
    assignedTo: {
      userId: string;
      userName: string;
      userSurname: string;
    };
  }
}

export enum IssuesEvent {
  EDITED_SUCCESSFULLY = 'EDITED_SUCCESSFULLY',
  CREATED_SUCCESSFULLY = 'CREATED_SUCCESSFULLY',
  REFRESH = 'REFRESH',
}