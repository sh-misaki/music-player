import actions from "./actions";

const failure = actions.failure;
const increment = actions.increment;
const decrement = actions.decrement;
const reset = actions.reset;
const loadData = actions.loadData;
const loadDataSuccess = actions.loadDataSuccess;
const startClock = actions.startClock;
const tickClock = actions.tickClock;

export default {
  failure,
  increment,
  decrement,
  reset,
  loadData,
  loadDataSuccess,
  startClock,
  tickClock,
};
