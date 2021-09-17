import React from "react";
import BottomBar from "./BottomBar";
import PlayerInner from "./PlayerInner";

const Player = ({
  track,
  duration,
  progress,
  isPlaying,
  isLooping,
  isShuffling,
  onPlayClick,
  onPauseClick,
  onToggleLoopingClick,
  onToggleShufflingClick,
  onStepBackClick,
  onStepForwardClick,
}) => (
  <BottomBar isOpen={!!track}>
    {!!track && (
      <PlayerInner
        track={track}
        duration={duration}
        progress={progress}
        isPlaying={isPlaying}
        isLooping={isLooping}
        isShuffling={isShuffling}
        onPlayClick={onPlayClick}
        onPauseClick={onPauseClick}
        onToggleLoopingClick={onToggleLoopingClick}
        onToggleShufflingClick={onToggleShufflingClick}
        onStepBackClick={onStepBackClick}
        onStepForwardClick={onStepForwardClick}
      />
    )}
  </BottomBar>
);

export default Player;