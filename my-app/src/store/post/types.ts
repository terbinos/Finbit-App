import { IUserComments, IUserPosts } from "../users/types";


export interface PostState {
  selectedPost: IUserPosts | null;
  loading: boolean | null;
  postComments: IUserComments[] | null;
  error: any;
}

//auth action names
export enum PostTypes {
  SELECTED_POST_LOAD_SUCCESS = "SELECTED_POST_LOAD_SUCCESS",
  SELECTED_POST_LOAD_ERROR = "SELECTED_POST_LOAD_ERROR",
  POST_COMMENTS_LOAD_SUCCESS = "POST_COMMENTS_LOAD_SUCCESS",
  POST_COMMENTS_LOAD_ERROR = "POST_COMMENTS_LOAD_ERROR",
}

//interface for action names

interface PostSuccessAction {
  type: typeof PostTypes.SELECTED_POST_LOAD_SUCCESS;
  payload: any;
}
interface PostLoadErrorAction {
  type: typeof PostTypes.SELECTED_POST_LOAD_ERROR;
  error: any;
}

interface PostCommentsSuccessAction {
  type: typeof PostTypes.POST_COMMENTS_LOAD_SUCCESS;
  payload: any;
}
interface PostCommentsLoadErrorAction {
  type: typeof PostTypes.POST_COMMENTS_LOAD_ERROR;
  error: any;
}


export type PostActionTypes =
  | PostSuccessAction
  | PostLoadErrorAction
  | PostCommentsSuccessAction
  | PostCommentsLoadErrorAction
