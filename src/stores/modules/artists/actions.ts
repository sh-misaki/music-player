import { actionTypes } from "./types";

const fetchList = (error: Error) => {
  return {
    type: actionTypes.FETCH_LIST,
    error
  };
};

export default {
  fetchList,
};
