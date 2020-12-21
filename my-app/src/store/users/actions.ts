import axios from "axios";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "..";
import { UsersTypes } from "./types";

export const thunkGetUsers = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async (dispatch) => {
  try {
    let res;

    const api = "https://jsonplaceholder.typicode.com/users";
    res = await axios.get(api);
    dispatch({
      type: UsersTypes.USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: UsersTypes.USER_FAILED,
      error: error,
    });
  }
};

export const thunkSetInitialValue = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async (dispatch) => {
  try {
    let res;

    const api = "https://jsonplaceholder.typicode.com/posts/1/comments";
    res = await axios.get(api);
    dispatch({
      type: UsersTypes.INITIAL_VALUE_LOADED,
      payload: res.data.length,
    });
  } catch (error) {
    dispatch({
      type: UsersTypes.INITIAL_VALUE_FAILED,
      error: error,
    });
  }
};

export const thunkGetUserPost = (
  userId: number
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  try {
    let res;
    const api = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    res = await axios.get(api);
    dispatch({
      type: UsersTypes.USER_POST_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: UsersTypes.USER_POST_FAILED,
      error: error,
    });
  }
};

export const thunkGetUserComments = (
  userId: number
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  try {
    let res;
    const api = `https://jsonplaceholder.typicode.com/comments?userId=${userId}`;
    res = await axios.get(api);
    dispatch({
      type: UsersTypes.USER_COMMENT_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: UsersTypes.USER_COMMENT_FAILED,
      error: error,
    });
  }
};

export const thunkUpdateVIP = (
  isVIP: boolean
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  try {
    dispatch({
      type: UsersTypes.VALUE_UPDATED,
      payload: isVIP,
    });
  } catch (error) {
    console.log("Update error", error);
  }
};

export const thunkUpdateCommentsOff = (
  postId: number,
  isVIP: boolean
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  try {
    console.log("postId", postId);
    console.log("isVIP", isVIP);
    dispatch({
      type: UsersTypes.COMMENT_OFF_UPDATED,
      payload: { id: postId, data: isVIP },
    });
  } catch (error) {
    console.log("Update error", error);
  }
};

// export const thunkUpdateVIPFromList = (
//   userId:number,
//   isVIP: boolean,
// ): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
//   try {
//     dispatch({
//       type: UsersTypes.VIP_UPDATED,
//       payload: {id:userId,data:isVIP},
//     });
//   } catch (error) {
//     console.log("Update error", error);
//   }
// };
