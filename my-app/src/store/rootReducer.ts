import { AnyAction, CombinedState, combineReducers, Reducer } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PostReducer } from "./post/reducers";
import { PostState } from "./post/types";
import { UsersReducer } from "./users/reducer";
import { UsersState } from "./users/types";



export const rootReducer = combineReducers({
  users: UsersReducer,
  post: PostReducer
});
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['post', 'users'],
};

export default persistReducer(persistConfig, rootReducer);
