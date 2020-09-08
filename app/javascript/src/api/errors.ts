export interface ApiError {
  error: string;
  type: ErrorTypes;
}

export enum ErrorTypes {
  RECORD_INVALID = "ActiveRecord::RecordInvalid"
}