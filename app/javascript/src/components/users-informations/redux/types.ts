import { IResponseBase } from '../../../api/types';
import { AppRolesConst } from '../../../session/redux/types';

export interface UsersInformationsState {
  entities: {
    usersInformations: UsersInformationsIndex[];
    userInformations: UserInformationsShow;
  },
  eventAccumulator: UserInformationsEvent[]
}

export interface UserInformationsShow extends IResponseBase {
  attributes: {
    name: string;
    surname: string;
    phone_number: string;
    email: string;
    role: keyof typeof AppRolesConst;
    createdAt: string;
  }
}

export interface UsersInformationsIndex extends IResponseBase {
  attributes: {
    name: string;
    surname: string;
    phone_number: string;
    email: string;
    role: keyof typeof AppRolesConst;
    createdAt: string;
    enterpriseId: string;
    enterpriseName: string;
  }
}

export enum UserInformationsEvent {
  EDITED_SUCCESSFULLY = 'EDITED_SUCCESSFULLY',
  REFRESH = 'REFRESH',
}