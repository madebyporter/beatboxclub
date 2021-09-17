import React, { useState } from "react";
import Playlist from "./Playlist/Playlist";
import PlayerPortal from "./Player/PlayerPortal";
import Player from "./Player/Player";

const App = ({ tracks }) => {
  const [currentTrackId, setCurrentTrackId] = useState(undefined);
  const [isPlaying, setIsPlaying] = useState(true);

  const onPlay = (trackId) => {
    if (trackId) setCurrentTrackId(trackId);
    else if (!currentTrackId)
      throw new Error("No trackId selected for playback");

    setIsPlaying(true);
  };

  const onPause = () => setIsPlaying(false);

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
            currentTrackId
              ? tracks.find(({ id }) => id === currentTrackId)
              : undefined
          }
          isPlaying={isPlaying}
          onPlay={onPlay}
          onPause={onPause}
        />
      </PlayerPortal>
    </>
  );
};

export default App;
