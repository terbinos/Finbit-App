import { Reducer } from "redux";
import { UsersActionTypes, UsersState, UsersTypes } from "./types";

export const usersInitialState: UsersState = {
  users: null,
  loading: null,
  error: null,
};

export const UsersReducer: Reducer<UsersState, UsersActionTypes> = (
  state = usersInitialState,
  action
) => {
  switch (action.type) {
    case UsersTypes.USER_LOADED:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case UsersTypes.USER_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
