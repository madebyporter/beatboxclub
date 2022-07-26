import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App tracks={tracks} netlifyIdentity={netlifyIdentity} />
  </React.StrictMode>,
  document.getElementById("beatbox-playlist")
);
