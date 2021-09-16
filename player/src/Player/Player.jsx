import React from "react";
import ReactDOM from "react-dom";
import useSiteWrapperPlayerOnClass from "./useSiteWrapperPlayerOnClass";

const Player = ({ isOpen, track }) => {
  useSiteWrapperPlayerOnClass(isOpen);

  return ReactDOM.createPortal(
    <aside className={`bbx-musicplayer ${isOpen ? "open" : "closed"}`}>
      {track.name}
    </aside>,
    document.getElementById("react-player")
  );
};

export default Player;
