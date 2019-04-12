import { INCREMENT, DECREMENT } from "../actions/sample";
import { Action } from "redux";

const initialState = {
  count: 0
};

export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: ++state.count
      };
    case DECREMENT:
      return {
        ...state,
        count: --state.count
      };
    default:
      return state;
  }
}
