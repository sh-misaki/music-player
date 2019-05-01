import { IPlaylistState, actionTypes } from "./types";

export const exampleInitialState: IPlaylistState | {} = {
  playlist: {},
};

export default function reducer(state = exampleInitialState, action: any) {
  switch (action.type) {
    case actionTypes.FETCH_LIST:
      return {
        ...state,
        playlist: action.playlist,
      };
    default:
      return state;
  }
}
