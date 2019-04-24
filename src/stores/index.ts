
import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import * as artistsReducers from "./modules/artists";
import * as artistShowReducers from "./modules/artistsShow";
import * as albumReducers from "./modules/albums";

let middleware: any;

if (process.env.NODE_ENV !== "production") {
  middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
} else {
  middleware = applyMiddleware(thunkMiddleware);
}

export default function configureStore() {
  return createStore(combineReducers({
    artistsReducers: artistsReducers.default,
    artistShowReducers: artistShowReducers.default,
    albumReducers: albumReducers.default,
  }), middleware);
}
