import { IResponseBase } from '../../../api/types';

export interface EnterprisesState {
  entities: {
    enterprises: EnterprisesIndex[];
    enterprise: EnterpriseShow;
  },
  eventAccumulator: EnterpriseEvent[]
}

export interface EnterpriseShow extends IResponseBase {
  attributes: {
    name: string;
    description: string;
  }
}

export interface EnterprisesIndex extends IResponseBase {
  attributes: {
    name: string;
    description: string;
  }
}

export enum EnterpriseEvent {
  EDITED_SUCCESSFULLY = 'EDITED_SUCCESSFULLY',
  CREATED_SUCCESSFULLY = 'CREATED_SUCCESSFULLY',
  DELETED_SUCCESSFULLY = 'DELETED_SUCCESSFULLY',
  REFRESH = 'REFRESH',
}