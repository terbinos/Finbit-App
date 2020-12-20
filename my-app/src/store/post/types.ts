import { IUserPosts } from "../users/types";


export interface PostState {
  selectedPost: IUserPosts | null;
  loading: boolean | null;
  error: any;
}

//auth action names
export enum PostTypes {
  SELECTED_POST_LOAD_SUCCESS = "SELECTED_POST_LOAD_SUCCESS",
  SELECTED_POST_LOAD_ERROR = "SELECTED_POST_LOAD_ERROR",
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


export type PostActionTypes =
  | PostSuccessAction
  | PostLoadErrorAction
