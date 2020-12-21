import { Reducer } from "redux";
import update from "react-addons-update";
import { UsersActionTypes, UsersState, UsersTypes } from "./types";
import { stat } from "fs";

export const usersInitialState: UsersState = {
  users: null,
  user: null,
  userPosts: null,
  userComments: null,
  initialValue: null,
  routeState: null,
  loading: null,
  error: null,
};

export const UsersReducer: Reducer<UsersState, UsersActionTypes> = (
  state = usersInitialState,
  action
) => {
  switch (action.type) {
    case UsersTypes.VALUE_UPDATED:
      return update(state, {
        user: {
          isVIP: { $set: action.payload },
        },
      });

    // case UsersTypes.VIP_UPDATED:
    //   return {
    //     ...state,
    //     users: state.users?.map((user, i) =>
    //       i === action.payload.id
    //         ? { ...user, isVIP: action.payload.data }
    //         : user
    //     ),
    //   };

    case UsersTypes.SET_ROUTE_STATE:
      return {
        ...state,
        routeState: action.payload,
        loading: false,
      };
    case UsersTypes.SELECTED_USER_LOADED:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
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
    case UsersTypes.USER_POST_LOADED:
      return {
        ...state,
        userPosts: action.payload,
        loading: false,
      };
    case UsersTypes.USER_POST_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case UsersTypes.USER_COMMENT_LOADED:
      return {
        ...state,
        userComments: action.payload,
        loading: false,
      };
    case UsersTypes.USER_COMMENT_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case UsersTypes.INITIAL_VALUE_LOADED:
      return {
        ...state,
        initialValue: action.payload,
        loading: false,
      };
    case UsersTypes.INITIAL_VALUE_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
