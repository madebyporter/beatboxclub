import React, { useState } from "react";
import Playlist from "./Playlist/Playlist";
import PlayerPortal from "./Player/PlayerPortal";
import Player from "./Player/Player";

// TODO: Split this into multiple components

const trackComparisonFunction = (track1, track2) => {
  return track1.createdAt === track2.createdAt
    ? 0
    : track1.createdAt > track2.createdAt
    ? -1
    : 1;
};

const App = ({ tracks }) => {
  const sortedTracks = [...tracks].sort(trackComparisonFunction);

  const [currentTrackId, setCurrentTrackId] = useState(undefined);
  const [isPlaying, setIsPlaying] = useState(true);

  const onPlay = (trackId) => {
    if (typeof trackId === "string") setCurrentTrackId(trackId);
    else if (!currentTrackId)
      throw new Error("No trackId selected for playback");

    setIsPlaying(true);
  };

  const onPause = () => setIsPlaying(false);

  const getTrackIndexForTrackId = (trackId) =>
    sortedTracks.findIndex(({ id }) => id === trackId);

  const getTrackWithId = (trackId) =>
    sortedTracks.find(({ id }) => id === trackId);

  const onPlayPrevious = () => {
    setCurrentTrackId((currentId) => {
      const trackIndex = getTrackIndexForTrackId(currentId);
      const previousIndex =
        (sortedTracks.length + trackIndex - 1) % sortedTracks.length;
      const previousTrackId = sortedTracks[previousIndex].id;

      return previousTrackId;
    });
  };

  const onPlayNext = () => {
    setCurrentTrackId((currentId) => {
      const trackIndex = getTrackIndexForTrackId(currentId);
      const nextIndex = (trackIndex + 1) % sortedTracks.length;
      const nextTrackId = sortedTracks[nextIndex].id;

      return nextTrackId;
    });
  };

  return (
    <>
      <Playlist
        tracks={sortedTracks}
        currentTrackId={currentTrackId}
        isPlaying={isPlaying}
        onPlay={onPlay}
        onPause={onPause}
      />
      <PlayerPortal>
        <Player
          track={currentTrackId ? getTrackWithId(currentTrackId) : undefined}
          isPlaying={isPlaying}
          onPlay={onPlay}
          onPause={onPause}
          onPlayPrevious={onPlayPrevious}
          onPlayNext={onPlayNext}
        />
      </PlayerPortal>
    </>
  );
};

export default App;
