import { applyMiddleware, createStore, Middleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer, { exampleInitialState } from "./reducers";
import rootSaga from "./saga";

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(initialState = exampleInitialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store: Store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  );

  (store as { sagaTask?: any }).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
