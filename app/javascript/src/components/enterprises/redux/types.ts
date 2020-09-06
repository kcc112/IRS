import { IResponseBase } from '../../../api/types';

export interface EnterprisesState {
  entities: {
    enterprises: EnterprisesIndex[];
    enterprise: EnterpriseShow;
  }
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