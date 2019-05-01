
import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import * as artistShowReducers from "./modules/artist";
import * as albumReducers from "./modules/album";
import * as recommendReducers from "./modules/recommendations";

let middleware: any;

if (process.env.NODE_ENV !== "production") {
  middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
} else {
  middleware = applyMiddleware(thunkMiddleware);
}

export default function configureStore() {
  return createStore(combineReducers({
    artistShowReducers: artistShowReducers.default,
    albumReducers: albumReducers.default,
    recommendReducers: recommendReducers.default,
  }), middleware);
}
