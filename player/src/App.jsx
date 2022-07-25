import React from "react";
import useAuth from "./hooks/useAuth";
import usePlaylistFunctionality from "./hooks/usePlaylistFunctionality";
import Playlist from "./Playlist/Playlist";
import PlayerPortal from "./Player/PlayerPortal";
import Player from "./Player/Player";
import PlayerInternals from "./Player/PlayerInternals";

import ReactGA from "react-ga";
const trackingId = "UA-59805983-1";

const App = ({ tracks: unsortedTracks, netlifyIdentity }) => {
  const {
    playerRef,
    tracks,
    currentTrack,
    playingState,
    playbackProgress,
    playbackOrder,
    playbackVolume,
  } = usePlaylistFunctionality(unsortedTracks);

  const user = useAuth(netlifyIdentity);

  return (
    <>
      <Playlist
        user={user}
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
          playbackVolume={playbackVolume}
        />
      </PlayerPortal>
      <PlayerInternals
        ref={playerRef}
        currentTrack={currentTrack || tracks[0]} // Reasoning: iOS Safari's autoplay prevention requires the <audio> element to be present on the page before the user clicks "play". Otherwise, the click event will not cause the audio to play. Therefore, we render the audio element with a dummy track when the page is initially loaded.
        playingState={playingState}
        playbackProgress={playbackProgress}
        playbackOrder={playbackOrder}
        playbackVolume={playbackVolume}
      />
    </>
  );
};

export default App;
