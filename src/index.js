
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import App from "views/App.js";
// others

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
serviceWorker.unregister();
