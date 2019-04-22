import { actionTypes, ITodoState } from "./types";

export const exampleInitialState: ITodoState = {
  artists: [],
};

export default function reducer(state = exampleInitialState, action: any) {
  switch (action.type) {
    case actionTypes.FETCH_LIST:
      return {
        ...state,
      };
    default:
      return state;
  }
}
