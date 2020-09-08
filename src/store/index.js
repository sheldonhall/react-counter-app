/**
 * Redux Store
 */

import { createStore } from "redux";

import CounterReducer from "../reducers/CounterReducers";

export default function ConfigureStore() {
  const store = createStore(
    CounterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  /*if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers/index", () => {
      const nextRootReducer = require("../reducers/index");
      store.replaceReducer(nextRootReducer);
    });
  }*/

  return store;
}
