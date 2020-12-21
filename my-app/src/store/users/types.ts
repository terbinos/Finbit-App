export interface IUserDetails {
  userId: number;
  vip: boolean;
  comments: boolean;
}

export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    isVIP: boolean | null,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
}

export interface IUserPosts{
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface IUserComments{
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

export interface UsersState {
  users: IUser[] | null;
  user: IUser | null;
  userPosts: IUserPosts[] | null;
  userComments: IUserComments[] | null;
  initialValue: number | null;
  routeState: boolean | null ;
  // userDetails: IUserDetails[] | null;
  loading: boolean | null;
  error: any;
}

export enum UsersTypes {
  USER_LOADED = "USER_LOADED",
  SELECTED_USER_LOADED = "SELECTED_USER_LOADED",
  USER_FAILED = "USER_FAILED",
  USER_POST_LOADED = "USER_POST_LOADED",
  USER_POST_FAILED = "USER_POST_FAILED",
  USER_COMMENT_LOADED = "USER_COMMENT_LOADED",
  USER_COMMENT_FAILED = "USER_COMMENT_FAILED",
  INITIAL_VALUE_LOADED = "INITIAL_VALUE_LOADED",
  INITIAL_VALUE_FAILED = "INITIAL_VALUE_FAILED",
  VALUE_UPDATED = 'VALUE_UPDATED',  
  SET_ROUTE_STATE = "SET_ROUTE_STATE",
}

interface ValueUpdatedAction {
  type: typeof UsersTypes.VALUE_UPDATED;
  payload: any;
}

interface SelectedStateLoadedAction {
  type: typeof UsersTypes.SELECTED_USER_LOADED;
  payload: any;
}

interface RouteStateLoadedAction {
  type: typeof UsersTypes.SET_ROUTE_STATE;
  payload: any;
}

interface UserLoadedAction {
  type: typeof UsersTypes.USER_LOADED;
  payload: any;
}
interface UserFailedAction {
  type: typeof UsersTypes.USER_FAILED;
  error: any;
}

interface InitialValueLoadedAction {
  type: typeof UsersTypes.INITIAL_VALUE_LOADED;
  payload: any;
}
interface InitialValueFailedAction {
  type: typeof UsersTypes.INITIAL_VALUE_FAILED;
  error: any;
}

interface UserCommentLoadedAction {
  type: typeof UsersTypes.USER_COMMENT_LOADED;
  payload: any;
}
interface UserCommentFailedAction {
  type: typeof UsersTypes.USER_COMMENT_FAILED;
  error: any;
}

interface UserPostLoadedAction {
  type: typeof UsersTypes.USER_POST_LOADED;
  payload: any;
}
interface UserPostFailedAction {
  type: typeof UsersTypes.USER_POST_FAILED;
  error: any;
}

export type UsersActionTypes =
  | UserLoadedAction
  | UserFailedAction
  | UserPostLoadedAction
  | UserPostFailedAction
  | UserCommentLoadedAction
  | UserCommentFailedAction
  | InitialValueFailedAction
  | InitialValueLoadedAction
  | RouteStateLoadedAction
  | SelectedStateLoadedAction
  | ValueUpdatedAction
