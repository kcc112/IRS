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

export interface CurrentUser {
  id: string;
  role:	keyof typeof AppRoles;
  email: string;
  name:	string;
  surname: string;
  enterprise: string;
}

export enum Actions {
  CREATE = 'CREATE',
  VIEW = 'VIEW'
}

export enum Subjects {
  ENTERPRISES = 'ENTERPRISES',
  ISSUES = 'ISSUES',
  COMMENTS = 'COMMENTS',
  USERS = 'USERS',
}

export interface SessionState {
  entities: {
    currentUser: CurrentUser;
    roles: Role[];
  }
}