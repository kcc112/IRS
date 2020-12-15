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

export interface IssueAssignPayload {
  assigned_to_id: string;
}

export interface CommentEditPayload {
  content: string;
}

export interface CommentCreatePayload {
  content: string;
  user_id: string;
  issue_id: string;
}

export interface AssignUserPayload {
  enterprise_id: string;
}