import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { campusesSubRed, studentsSubRed } from "./store/reducers";
import store from "./store/store";
import Root from "./components/root";

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("main")
);
