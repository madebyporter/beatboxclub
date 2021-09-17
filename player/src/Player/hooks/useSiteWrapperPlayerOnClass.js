import { useEffect } from "react";

const SITE_WRAPPER_CLASS_PLAYER_ON = "player-on";

const useSiteWrapperPlayerOnClass = (isPlayerOpen) => {
  useEffect(() => {
    const siteWrapperTags = document.getElementsByClassName("site-wrapper");

    for (const wrapper of siteWrapperTags) {
      if (isPlayerOpen) wrapper.classList.add(SITE_WRAPPER_CLASS_PLAYER_ON);
      else wrapper.classList.remove(SITE_WRAPPER_CLASS_PLAYER_ON);
    }
  }, [isPlayerOpen]);
};

export default useSiteWrapperPlayerOnClass;
