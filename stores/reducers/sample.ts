import { INCREMENT, DECREMENT } from "../actions/sample";

const initialState = {
  count: 0
};

export function counterReducer(state = initialState, action) {
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
