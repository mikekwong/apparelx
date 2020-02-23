import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/store";
// more scaleable to spread out the array in case we add future middleware
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
