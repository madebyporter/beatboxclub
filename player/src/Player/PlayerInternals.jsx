import React from "react";
import ReactPlayer from "react-player";

const PlayerInternals = React.forwardRef(
  (
    {
      currentTrack,
      playingState: { isPlaying },
      playbackProgress: { onDurationChanged, onProgressChanged },
      playbackOrder: { isLooping, onStepForward },
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
      onEnded={onStepForward}
      onDuration={onDurationChanged}
      progressInterval={100}
      onProgress={(progressInfo) =>
        onProgressChanged(progressInfo.playedSeconds)
      }
    />
  )
);

export default PlayerInternals;
