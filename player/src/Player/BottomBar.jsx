import React from "react";
import useSiteWrapperPlayerOnClass from "./hooks/useSiteWrapperPlayerOnClass";

const BottomBar = ({ isOpen, children }) => {
  useSiteWrapperPlayerOnClass(isOpen);

  return (
    <aside className={`bbx-musicplayer ${isOpen ? "open" : "closed"}`}>
      {children}
    </aside>
  );
};

export default BottomBar;
