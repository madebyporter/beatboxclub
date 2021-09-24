import React from "react";
import usePlaylistFunctionality from "./hooks/usePlaylistFunctionality";
import Playlist from "./Playlist/Playlist";
import PlayerPortal from "./Player/PlayerPortal";
import Player from "./Player/Player";
import PlayerInternals from "./Player/PlayerInternals";

const App = ({ tracks: unsortedTracks }) => {
  const {
    playerRef,
    tracks,
    currentTrack,
    playingState,
    playbackProgress,
    playbackOrder,
  } = usePlaylistFunctionality(unsortedTracks);

  // TODO: Player instantiation is unnecessarily long

  return (
    <>
      <Playlist
        tracks={tracks}
        currentTrackId={currentTrack?.id}
        playingState={playingState}
      />
      <PlayerPortal>
        <Player
          track={currentTrack}
          isPlaying={playingState.isPlaying}
          onPlayClick={() => playingState.onPlay(currentTrack.id)}
          onPauseClick={playingState.onPause}
          duration={playbackProgress.duration}
          progress={playbackProgress.progress}
          onSeekStart={playbackProgress.onSeekStart}
          onSeek={playbackProgress.onSeek}
          onSeekEnd={playbackProgress.onSeekEnd}
          isLooping={playbackOrder.isLooping}
          isShuffling={playbackOrder.isShuffling}
          onToggleLoopingClick={playbackOrder.onToggleIsLooping}
          onToggleShufflingClick={playbackOrder.onToggleIsShuffling}
          onStepBackClick={playbackOrder.onStepBack}
          onStepForwardClick={playbackOrder.onStepForward}
        />
      </PlayerPortal>
      {!!currentTrack && (
        <PlayerInternals
          ref={playerRef}
          currentTrack={currentTrack}
          playingState={playingState}
          playbackProgress={playbackProgress}
          playbackOrder={playbackOrder}
        />
      )}
    </>
  );
};

export default App;
