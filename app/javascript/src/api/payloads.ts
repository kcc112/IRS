export interface EnterpriseEditPayload {
  name: string;
  description: string;
}

export interface EnterpriseCreatePayload {
  name: string;
  description: string;
}

export interface IssueEditPayload {
  description: string;
  issue_type: string;
}

export interface IssueCreatePayload {
  description: string;
  issue_type: string;
  reported_by_id: string;
}

export interface UserInformationsEditPayload {
  name: string;
  surname: string;
  phone_number: string;
}

export interface UserRoleEditPayload {
  role: {
    value: string;
  };
}