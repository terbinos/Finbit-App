import axios from "axios";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "..";
import { ProfileTypes } from "./types";


export const thunkGetProfile = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async (dispatch) => {
  try {
    let res;

    const api = "/api/lawyer/get-profile";
    res = await axios.get(api);
    dispatch({
      type: ProfileTypes.PROFILE_LOAD_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ProfileTypes.PROFILE_LOAD_ERROR,
      error: error,
    });
  }
};

export const thunkGetLawyerProfile = (lawyer_id:string): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async (dispatch) => {
  try {
    let res;

    const api = "/api/client/lawyer-profile";
    res = await axios.post(api,{lawyer_id});
    dispatch({
      type: ProfileTypes.PROFILE_LOAD_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ProfileTypes.PROFILE_LOAD_ERROR,
      error: error,
    });
  }
};

export const thunkCreateProfile = (
  location: string,
  legalfields: string[],
  serv: string[],
  lang: string[],
  tariff: number,
  description: string,
  short_description: string,
  career_path: string
): ThunkAction<void, AppState, null, Action<string>> => async (): Promise<
  boolean
> => {
  let status = false;
  try {
    let body = {
      location: location,
      legal_fields: legalfields,
      languages: lang,
      description: description,
      tariff: tariff,
      services: serv,
      short_description: short_description,
      career_path: career_path
    };
    await axios.post("/api/lawyer/build-profile", body);
    status = true;
  } catch (error) {
    console.log(error);
  }

  return Promise.resolve(status);
};

export const logout = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => async (dispatch) => {
  dispatch({ type: ProfileTypes.LOGOUT });
};
