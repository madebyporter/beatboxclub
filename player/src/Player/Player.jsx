import React from "react";
import BottomBar from "./BottomBar";
import PlayerInner from "./PlayerInner";

const Player = ({
  track,
  playingState: { isPlaying, onPlay, onPause },
  playbackProgress: { progress, duration, onSeekStart, onSeek, onSeekEnd },
  playbackOrder: {
    isLooping,
    isShuffling,
    onToggleIsLooping,
    onToggleIsShuffling,
    onStepBack,
    onStepForward,
  },
  volume,
}) => (
  <BottomBar isOpen={!!track}>
    {!!track && (
      <PlayerInner
        track={track}
        isPlaying={isPlaying}
        onPlayClick={() => onPlay(track.id)}
        onPauseClick={onPause}
        progress={progress}
        duration={duration}
        onSeekStart={onSeekStart}
        onSeek={onSeek}
        onSeekEnd={onSeekEnd}
        isLooping={isLooping}
        isShuffling={isShuffling}
        onToggleLoopingClick={onToggleIsLooping}
        onToggleShufflingClick={onToggleIsShuffling}
        onStepBackClick={onStepBack}
        onStepForwardClick={onStepForward}
        volume={volume}
        onVolumeChange={volume}
      />
    )}
  </BottomBar>
);

export default Player;
