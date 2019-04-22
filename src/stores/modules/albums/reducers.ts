import IAlbumsState, { actionTypes } from "./types";

export const exampleInitialState: IAlbumsState = {
  albums: [],
};

export default function reducer(state = exampleInitialState, action: any) {
  switch (action.type) {
    case actionTypes.FETCH_LIST:
      return {
        ...state,
        albums: action.albums,
      };
    default:
      return state;
  }
}
