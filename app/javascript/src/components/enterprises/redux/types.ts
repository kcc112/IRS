import { IResponseBase } from '../../../api/types';

export interface EnterprisesState {
  entities: {
    enterprises: EnterprisesIndex[];
  }
}

export interface EnterprisesIndex extends IResponseBase {
  attributes: {
    name: string;
    description: string;
  }
}