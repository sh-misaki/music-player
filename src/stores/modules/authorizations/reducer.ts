// /* すべてのActionをインポート */
// import * as actions from "./action";

// /* tasks[] 配列に格納するオブジェクトの型を定義する */
// interface ITask {
//   id: number;
//   text: string;
//   done: boolean;
// }

// let idCounter: number = 1;

// /* Taskを作成する。ITaskという指定された型を返す。 */
// const buildTask = (text: string): ITask => ({
//   done: false,
//   id: ++idCounter,
//   text
// });

// /*
//     addTodoというActionを待ち受けるとともに初期状態のStoreをセットする。
//     addTodoが飛んできた場合には、新しいTaskをStoreに格納して、Storeを更新する。
//  */
// export default reducerWithInitialState(initialReduceTodoState)
//   .case(actions.addTodo, (state: ITodoState, payload) => ({
//     ...state,
//     tasks: state.tasks.concat(buildTask(payload))
//   }))
//   .build();

import { reducerWithInitialState } from "typescript-fsa-reducers";
import { actionTypes } from "./action";

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

export default reducerWithInitialState(exampleInitialState)
  .case(actionTypes.FAILURE, (state: ITodoState, payload) => {
    return {
      ...state,
      tasks: state.count += payload,
    };
  })
  .build();

function reducer(state = exampleInitialState, action: any) {
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
