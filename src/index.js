import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import App from "./components/App";
import reducers from "./reducers";
import { watchPostsAsync, watchUserAsync } from "./sagas/sagas";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    composeWithDevTools()
  )
);
sagaMiddleware.run(watchPostsAsync);
sagaMiddleware.run(watchUserAsync);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
