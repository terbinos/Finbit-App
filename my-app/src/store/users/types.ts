interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
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

export interface UsersState {
  users: IUser[] | null;
  loading: boolean | null;
  error: any;
}

export enum UsersTypes {
  USER_LOADED = "USER_LOADED",
  USER_FAILED = "USER_FAILED",
}

interface UserLoadedAction {
  type: typeof UsersTypes.USER_LOADED;
  payload: any;
}
interface UserFailedAction {
  type: typeof UsersTypes.USER_FAILED;
  error: any;
}

export type UsersActionTypes =
  | UserLoadedAction
  | UserFailedAction
