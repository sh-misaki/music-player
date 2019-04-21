import { ITodoState } from "./reducers";

function checkIfCountStarted( duck: ITodoState ) {
  return duck.count > 0;
}

export default {
  checkIfCountStarted
};
