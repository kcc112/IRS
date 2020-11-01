import { IResponseBase } from '../../../api/types';

export interface CommentsState {
  entities: {
    comments: CommentsIndex[];
  },
  eventAccumulator: CommentsEvent[];
}

export interface CommentsIndex extends IResponseBase {
  attributes: {
    comment: string;
    createdAt: string;
    updatedAt: string;
    commentOwner: {
      id: string;
      name: string;
      surname: string;
    }
  }
}

export enum CommentsEvent {
  REFRESH = 'REFRESH',
  CREATED_SUCCESSFULLY = 'CREATED_SUCCESSFULLY '
}