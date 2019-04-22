
import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import * as artistsReducers from "./modules/artists";
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
    albumReducers: albumReducers.default,
  }), middleware);
}

export interface IStore {
  artistsReducers: artistsReducers.artistsTypes;
  albumReducers: albumReducers.albumsTypes;
}
