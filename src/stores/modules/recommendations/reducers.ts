import { actionTypes, IRecommendsState } from "./types";

export const exampleInitialState: IRecommendsState = {
  artists: [],
  newReleases: [],
  featuredPlaylists: [],
  recommendTracks: [],
};

export default function reducer(state = exampleInitialState, action: any) {
  switch (action.type) {
    case actionTypes.FETCH_LIST:
      return {
        ...state,
        artists: action.artists,
        newReleases: action.newReleases,
        featuredPlaylists: action.featuredPlaylists,
        recommendTracks: action.recommendTracks,
      };
    default:
      return state;
  }
}
