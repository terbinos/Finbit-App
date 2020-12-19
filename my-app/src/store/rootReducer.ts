import { AnyAction, CombinedState, combineReducers, Reducer } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ProfileReducer } from "./profile/reducers";
import { ProfileState } from "./profile/types";
import { UsersReducer } from "./users/reducer";
import { UsersState } from "./users/types";

export const rootReducer: Reducer<
  CombinedState<{
    users: UsersState;
    profile: ProfileState;
  }>,
  AnyAction
> = combineReducers({
  users: UsersReducer,
  profile: ProfileReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["users","profiles"],
};

export default persistReducer(persistConfig, rootReducer);
