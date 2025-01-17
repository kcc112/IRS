import { IssuesTypes, Role } from '../session/redux/types';

export type IEntityType =
  | 'enterprise'
  | 'user'
  | 'reported_by'
  | 'assigned_to'
  | 'user_informations'
  | 'user_related'

export interface IResponseBase {
  id: string;
  type: IEntityType;
}

export interface IResponse {
  data: IResponseObject | IResponseObject[];
  included: IResponseObject[];
}

export interface IResponseObject extends IResponseBase {
  attributes: IResponseObjectAttributes;
  relationships: IResponseObjectRelationships;
}

export interface IResponseObjectAttributes {
  [key: string]: any;
}

export type IResponseObjectRelationships = {
  [key in IEntityType]?: IResponseObjectRelationship | IResponseObjectRelationship[];
};

export interface IResponseObjectRelationship {
  data: IResponseBase | IResponseBase[];
}

export interface ICurrentUser {
  data: {
    id: string;
    role: string;
    email: string;
    name: string;
    surname: string;
    enterprise: string;
    user_informations_id: string;
  }
}

export interface IRoles {
  data: {
    roles: Role[]
  },
};

export interface IIssuesTypes {
  types: IssuesTypes[]
};

export interface FilterParams {
  issue_id?: string;
}

export interface IndexParams extends FilterParams {}