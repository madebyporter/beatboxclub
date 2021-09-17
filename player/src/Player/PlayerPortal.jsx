import React from "react";
import ReactDOM from "react-dom";

const PlayerPortal = ({ children }) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById("beatbox-player")
  );
};

export default PlayerPortal;
