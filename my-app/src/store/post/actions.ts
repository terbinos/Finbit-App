// import axios from "axios";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "..";
import { IUserPosts } from "../users/types";
import { PostTypes } from "./types";


export const thunkSetSelectedPost = (post:IUserPosts): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async (dispatch) => {
  try {
    dispatch({
      type: PostTypes.SELECTED_POST_LOAD_SUCCESS,
      payload: post,
    });
  } catch (error) {
    dispatch({
      type: PostTypes.SELECTED_POST_LOAD_ERROR,
      error: error,
    });
  }
};