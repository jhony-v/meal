import React from "react";
import ReactDOM from "react-dom";
import App from "app/App";
import * as serviceWorker from "./serviceWorker";
import "sass/base/reset.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("__ROOT__")
);

serviceWorker.unregister();
