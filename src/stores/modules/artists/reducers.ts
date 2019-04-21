import { reducerWithInitialState } from "typescript-fsa-reducers";
import { actionTypes } from "./types";

/* Storeの型を定義する。 */
export interface ITodoState {
  count: number;
  error: boolean;
  lastUpdate: number;
  light: boolean;
  placeholderData: object | null;
}

export const exampleInitialState: ITodoState = {
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: null
};

export default function reducer(state = exampleInitialState, action: any) {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error }
      };

    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 }
      };

    case actionTypes.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 }
      };

    case actionTypes.RESET:
      return {
        ...state,
        ...{ count: exampleInitialState.count }
      };

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data }
      };

    case actionTypes.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: !!action.light }
      };

    default:
      return state;
  }
}
