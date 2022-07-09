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
  playbackVolume: {
    volume,
    isMuted,
    onChangeVolumeStart,
    onChangeVolume,
    onChangeVolumeEnd,
    onMute,
  },
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
        volume={volume}
        onSeekStart={onSeekStart}
        onSeek={onSeek}
        onSeekEnd={onSeekEnd}
        onChangeVolumeStart={onChangeVolumeStart}
        onChangeVolume={onChangeVolume}
        onChangeVolumeEnd={onChangeVolumeEnd}
        onMute={onMute}
        isLooping={isLooping}
        isShuffling={isShuffling}
        isMuted={isMuted}
        onToggleLoopingClick={onToggleIsLooping}
        onToggleShufflingClick={onToggleIsShuffling}
        onStepBackClick={onStepBack}
        onStepForwardClick={onStepForward}
      />
    )}
  </BottomBar>
);

export default Player;
