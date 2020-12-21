// import axios from "axios";
import axios from "axios";
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

export const thunkGetPostComments = (postId:string): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async (dispatch) => {
  try {
    let res;
    const api = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
    res = await axios.get(api);
    dispatch({
      type: PostTypes.POST_COMMENTS_LOAD_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PostTypes.POST_COMMENTS_LOAD_ERROR,
      error: error,
    });
  }
};