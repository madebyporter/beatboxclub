import React from "react";
import ReactPlayer from "react-player";

const PlayerInternals = React.forwardRef(
  ({ currentTrack, isPlaying, isLooping, onPlayNext }, ref) => (
    <ReactPlayer
      width={0}
      height={0}
      ref={ref}
      url={currentTrack.url}
      playing={isPlaying}
      loop={isLooping}
      onEnded={onPlayNext}
    />
  )
);

export default PlayerInternals;
