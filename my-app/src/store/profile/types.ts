export interface IProfile {
  location: string,
  legal_fields: string[],
  languages: string[],
  services: string[],
  description: string,
  short_description: string,
  career_path: string,
  tariff: number,
}

export interface ProfileState {
  profile: IProfile | null;
  loading: boolean | null;
  error: any;
}

//auth action names
export enum ProfileTypes {
  PROFILE_LOAD_SUCCESS = "PROFILE_LOAD_SUCCESS",
  PROFILE_LOAD_ERROR = "PROFILE_LOAD_ERROR",
  LOGOUT = "LOGOUT",
}

//interface for action names

interface ProfileSuccessAction {
  type: typeof ProfileTypes.PROFILE_LOAD_SUCCESS;
  payload: any;
}
interface ProfileLoadErrorAction {
  type: typeof ProfileTypes.PROFILE_LOAD_ERROR;
  error: any;
}

interface LogoutAction {
  type: typeof ProfileTypes.LOGOUT;
}

export type ProfileActionTypes =
  | ProfileSuccessAction
  | ProfileLoadErrorAction
  | LogoutAction
