import { IAlbumsState, actionTypes } from "./types";

export const exampleInitialState: IAlbumsState | {} = {
  album: {},
  artist: {},
};

export default function reducer(state = exampleInitialState, action: any) {
  switch (action.type) {
    case actionTypes.FETCH_LIST:
      return {
        ...state,
        album: action.album,
        artist: action.artist,
      };
    default:
      return state;
  }
}
