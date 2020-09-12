import { IResponseBase } from '../../../api/types';

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
  }
}

export interface UsersInformationsIndex extends IResponseBase {
  attributes: {
    name: string;
    surname: string;
    phone_number: string;
    email: string;
  }
}

export enum UserInformationsEvent {
  EDITED_SUCCESSFULLY = 'EDITED_SUCCESSFULLY',
  REFRESH = 'REFRESH',
}