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

