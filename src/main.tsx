import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "font-awesome/css/font-awesome.min.css";

import "./styles/main.scss";
import "./assets/themify/themify-icons.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <ToastContainer />
  </React.StrictMode>
);
