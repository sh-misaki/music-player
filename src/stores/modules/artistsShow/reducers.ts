import IArtistState, { actionTypes } from "./types";

export const exampleInitialState: IArtistState = {
  artist: {},
  albums: [],
  topTracks: [],
};

export default function reducer(state = exampleInitialState, action: any) {
  switch (action.type) {
    case actionTypes.FETCH_LIST:
      return {
        ...state,
        artist: action.artist,
        albums: action.albums,
        topTracks: action.topTracks,
      };
    default:
      return state;
  }
}
