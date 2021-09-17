import React, { useRef } from "react";
import usePlaylistFunctionality from "./hooks/usePlaylistFunctionality";
import Playlist from "./Playlist/Playlist";
import PlayerPortal from "./Player/PlayerPortal";
import Player from "./Player/Player";
import PlayerInternals from "./Player/PlayerInternals";

const App = ({ tracks: unsortedTracks }) => {
  const playerRef = useRef();

  const {
    tracks,
    currentTrack,
    isPlaying,
    isLooping,
    isShuffling,
    onPlay,
    onPause,
    onToggleIsLooping,
    onToggleIsShuffling,
    onStepBack,
    onStepForward,
  } = usePlaylistFunctionality(unsortedTracks, playerRef);

  return (
    <>
      <Playlist
        tracks={tracks}
        currentTrackId={currentTrack?.id}
        isPlaying={isPlaying}
        onPlay={onPlay}
        onPause={onPause}
      />
      <PlayerPortal>
        <Player
          track={currentTrack}
          isPlaying={isPlaying}
          isLooping={isLooping}
          isShuffling={isShuffling}
          onPlayClick={() => onPlay(currentTrack.id)}
          onPauseClick={onPause}
          onToggleLoopingClick={onToggleIsLooping}
          onToggleShufflingClick={onToggleIsShuffling}
          onStepBackClick={onStepBack}
          onStepForwardClick={onStepForward}
        />
      </PlayerPortal>
      {!!currentTrack && (
        <PlayerInternals
          ref={playerRef}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          isLooping={isLooping}
          onPlayNext={onStepForward}
        />
      )}
    </>
  );
};

export default App;
