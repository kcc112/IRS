import { IResponseBase } from '../../../api/types';

export interface IssuesState {
  entities: {
    issues: IssuesIndex[];
    issue: IssueShow;
  },
  meta: {
    issuesTypes: IssuesTypes[];
  }
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
    issueStatus: string;
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

export interface IssuesTypes {
  id: string;
  type: string;
}

export enum IssueType {
  OTHER = 'other',
  EQUIPMENT = 'equipment',
  AIR_CONDITIONING = 'air_conditioning',
}

export enum IssueStatus {
  UNASSIGNED = 'unassigned',
  ASSIGNED = 'assigned',
  RESOLVED = 'resolved',
}

export enum IssuesEvent {
  EDITED_SUCCESSFULLY = 'EDITED_SUCCESSFULLY',
  CREATED_SUCCESSFULLY = 'CREATED_SUCCESSFULLY',
  REFRESH = 'REFRESH',
  ASSIGN_SUCCESSFULLY = 'ASSIGN_SUCCESSFULLY',
}