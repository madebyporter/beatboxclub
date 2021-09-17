import React, { useState } from "react";
import Playlist from "./Playlist/Playlist";
import PlayerPortal from "./Player/PlayerPortal";
import Player from "./Player/Player";
import { getTrackWithId } from "./util";
import usePlaylistFunctionality from "./usePlaylistFunctionality";
import useSortedTracks from "./useSortedTracks";

const App = ({ tracks: unsortedTracks }) => {
  const tracks = useSortedTracks(unsortedTracks);

  const {
    currentTrackId,
    isPlaying,
    onPlay,
    onPause,
    onPlayPrevious,
    onPlayNext,
  } = usePlaylistFunctionality(tracks);

  return (
    <>
      <Playlist
        tracks={tracks}
        currentTrackId={currentTrackId}
        isPlaying={isPlaying}
        onPlay={onPlay}
        onPause={onPause}
      />
      <PlayerPortal>
        <Player
          track={
            currentTrackId ? getTrackWithId(tracks, currentTrackId) : undefined
          }
          isPlaying={isPlaying}
          onPlay={onPlay}
          onPause={onPause}
          onPlayPrevious={onPlayPrevious}
          onPlayNext={onPlayNext}
          onTrackEnded={onPlayNext}
        />
      </PlayerPortal>
    </>
  );
};

export default App;
