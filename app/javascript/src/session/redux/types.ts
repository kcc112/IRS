export enum AppRolesConst {
  ADMIN = 'admin',
  NOTIFIER = 'notifier',
  RECEIVER = 'receiver',
}

export enum AppRoles {
  admin,
  notifier,
  receiver,
}

export interface Role {
  id: string;
  role: keyof typeof AppRoles;
}

export interface IssuesTypes {
  id: string;
  type: string;
}

export interface CurrentUser {
  id: string;
  role:	keyof typeof AppRoles;
  email: string;
  name:	string;
  surname: string;
  enterprise: string;
  userInformationsId: string;
}

export enum Actions {
  CREATE = 'CREATE',
  VIEW = 'VIEW',
  EDIT = 'EDIT',
  DELETE  = 'DELETE',
}

export enum Subjects {
  ENTERPRISES = 'ENTERPRISES',
  ENTERPRISE = 'ENTERPRISE',
  ISSUES = 'ISSUES',
  ISSUE = 'ISSUE',
  COMMENTS = 'COMMENTS',
  USERS_INFORMATIONS = 'USERS_INFORMATIONS',
  USER_INFORMATIONS = 'USER_INFORMATIONS',
  HOME = 'HOME',
}

export interface SessionState {
  entities: {
    currentUser: CurrentUser;
    roles: Role[];
  }
}