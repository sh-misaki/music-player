import { actionTypes } from "./types";

const failure = (error: Error) => {
  return {
    type: actionTypes.FAILURE,
    error
  };
};

const increment = () => {
  return { type: actionTypes.INCREMENT };
};

const decrement = () => {
  return { type: actionTypes.DECREMENT };
};

const reset = () => {
  return { type: actionTypes.RESET };
};

const loadData = () => {
  return { type: actionTypes.LOAD_DATA };
};

const loadDataSuccess = (data: any) => {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data
  };
};

const startClock = () => {
  return { type: actionTypes.START_CLOCK };
};

const tickClock = (isServer: boolean) => {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now()
  };
};

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
