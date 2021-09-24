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
          playingState={playingState}
          playbackProgress={playbackProgress}
          playbackOrder={playbackOrder}
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
