import { Reducer } from "redux";
import { PostActionTypes, PostState, PostTypes } from "./types";

export const postInitialState: PostState = {
  selectedPost: null,
  postComments: null,
  loading: null,
  error: null,
};

export const PostReducer: Reducer<PostState, PostActionTypes> = (
  state = postInitialState,
  action
) => {
  switch (action.type) {
    case PostTypes.SELECTED_POST_LOAD_SUCCESS:
      return {
        ...state,
        selectedPost: action.payload,
        loading: false,
      };
    case PostTypes.SELECTED_POST_LOAD_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case PostTypes.POST_COMMENTS_LOAD_SUCCESS:
      return {
        ...state,
        postComments: action.payload,
        loading: false,
      };
    case PostTypes.POST_COMMENTS_LOAD_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
