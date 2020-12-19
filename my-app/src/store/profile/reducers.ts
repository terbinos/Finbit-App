import { Reducer } from "redux";
import { ProfileActionTypes, ProfileState, ProfileTypes } from "./types";

export const profileInitialState: ProfileState = {
  profile: null,
  loading: null,
  error: null,
};

export const ProfileReducer: Reducer<ProfileState, ProfileActionTypes> = (
  state = profileInitialState,
  action
) => {
  switch (action.type) {
    case ProfileTypes.PROFILE_LOAD_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    case ProfileTypes.PROFILE_LOAD_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case ProfileTypes.LOGOUT:
      return {
        ...state,
        profile: null,
        loading: null,
        error: null,
      };
    default:
      return state;
  }
};
