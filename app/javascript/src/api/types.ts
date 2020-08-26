export type IEntityType =
  | 'enterprise';

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
    role:	string;
    email: string;
    name:	string;
    surname: string;
    enterprise: string;
  }
}