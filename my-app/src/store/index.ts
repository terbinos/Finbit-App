import {
  applyMiddleware,
  createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import { persistReducer } from 'redux-persist' // imports from redux-persist
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { rootReducer } from "./rootReducer";

const initialState = {};
const persistConfig = {
    key: 'root',
    storage: storage,
};


const persistedReducer: any = persistReducer(persistConfig, rootReducer);
export type AppState = ReturnType<typeof rootReducer>;

const middlewares = [thunkMiddleware];
const middleWareEnhancer = applyMiddleware(...middlewares);

const store = createStore(persistedReducer, initialState, composeWithDevTools(middleWareEnhancer));

export default store;
