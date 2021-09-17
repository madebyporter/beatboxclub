import React from "react";
import ReactPlayer from "react-player";
import BottomBar from "./BottomBar";
import PlayerUI from "./PlayerUI";
import usePlayerFunctionality from "./usePlayerFunctionality";

const Player = ({
  track,
  isPlaying,
  isShuffling,
  onPlay,
  onPause,
  onPlayPrevious,
  onPlayNext,
  onTrackEnded,
  onToggleShuffling,
}) => {
  const { playerRef, isLooping, toggleIsLooping, onBackClick } =
    usePlayerFunctionality(onPlayPrevious);

  return (
    <BottomBar isOpen={!!track}>
      {!!track && (
        <>
          <ReactPlayer
            url={track.url}
            playing={isPlaying}
            loop={isLooping}
            width={0}
            height={0}
            ref={playerRef}
            onEnded={onTrackEnded}
          />

          <PlayerUI
            track={track}
            isPlaying={isPlaying}
            isLooping={isLooping}
            isShuffling={isShuffling}
            onPlayClick={() => onPlay(track.id)}
            onPauseClick={onPause}
            onBackClick={onBackClick}
            onNextClick={onPlayNext}
            onToggleLoopingClick={toggleIsLooping}
            onToggleShufflingClick={onToggleShuffling}
          />
        </>
      )}
    </BottomBar>
  );
};

export default Player;
