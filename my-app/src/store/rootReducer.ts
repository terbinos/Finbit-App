import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PostReducer } from "./post/reducers";
import { UsersReducer } from "./users/reducer";



export const rootReducer = combineReducers({
  users: UsersReducer,
  post: PostReducer
});
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['post', 'users','isVIP'],
};

export default persistReducer(persistConfig, rootReducer);
