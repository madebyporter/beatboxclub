import React from "react";
import Playlist from "./Playlist/Playlist";
import PlayerPortal from "./Player/PlayerPortal";
import Player from "./Player/Player";
import { getTrackWithId } from "./util";
import usePlaylistFunctionality from "./hooks/usePlaylistFunctionality";
import useSortedTracks from "./hooks/useSortedTracks";

const App = ({ tracks: unsortedTracks }) => {
  const tracks = useSortedTracks(unsortedTracks);

  const {
    currentTrackId,
    isPlaying,
    isShuffling,
    onPlay,
    onPause,
    onPlayPrevious,
    onPlayNext,
    onToggleShuffling,
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
          isShuffling={isShuffling}
          onPlay={onPlay}
          onPause={onPause}
          onPlayPrevious={onPlayPrevious}
          onPlayNext={onPlayNext}
          onToggleShuffling={onToggleShuffling}
          onTrackEnded={onPlayNext}
        />
      </PlayerPortal>
    </>
  );
};

export default App;
