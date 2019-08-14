import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";

import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import "bootstrap";

import "./styles/main.scss";
import "./assets/themify/themify-icons.css";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
