import { actionTypes, IArtistsState } from "./types";

export const exampleInitialState: IArtistsState = {
  artists: [],
};

export default function reducer(state = exampleInitialState, action: any) {
  switch (action.type) {
    case actionTypes.FETCH_LIST:
      return {
        ...state,
        artists: action.artists,
      };
    default:
      return state;
  }
}
