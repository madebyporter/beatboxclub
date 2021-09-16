import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App tracks={tracks} />
  </React.StrictMode>,
  document.getElementById("react-playlist")
);
