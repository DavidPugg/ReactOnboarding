import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./css/all.scss";

import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
