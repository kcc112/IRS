export interface ApiError {
  error: string;
  type: ErrorTypes;
}

export enum ErrorTypes {
  RECORD_INVALID = 'ActiveRecord::RecordInvalid',
  RECORD_NOT_FOUND = 'ActiveRecord::RecordNotFound',
  ISSUE_ALREADY_ASSIGNED = 'issue_already_assigned'
}