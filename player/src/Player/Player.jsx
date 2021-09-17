import React from "react";
import ReactPlayer from "react-player";
import useSiteWrapperPlayerOnClass from "./useSiteWrapperPlayerOnClass";

const Player = ({ isOpen, isPlaying, track, onPlay, onPause }) => {
  useSiteWrapperPlayerOnClass(isOpen);

  return (
    <aside className={`bbx-musicplayer ${isOpen ? "open" : "closed"}`}>
      {!!track && (
        <>
          <ReactPlayer
            url={track.url}
            playing={isPlaying}
            width={0}
            height={0}
          />

          {track.name}
        </>
      )}
    </aside>
  );
};

export default Player;
