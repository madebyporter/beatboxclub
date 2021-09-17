import React from "react";
import ReactPlayer from "react-player";

const PlayerInternals = React.forwardRef(
  (
    {
      currentTrack,
      isPlaying,
      isLooping,
      onPlayNext,
      onDurationChanged,
      onProgressChanged,
    },
    ref
  ) => (
    <ReactPlayer
      width={0}
      height={0}
      ref={ref}
      url={currentTrack.url}
      playing={isPlaying}
      loop={isLooping}
      onEnded={onPlayNext}
      onDuration={onDurationChanged}
      progressInterval={200}
      onProgress={(progressInfo) =>
        onProgressChanged(progressInfo.playedSeconds)
      }
    />
  )
);

export default PlayerInternals;
