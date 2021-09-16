import React, { useState } from "react";
import Playlist from "./Playlist/Playlist";
import Player from "./Player/Player";

const App = ({ tracks }) => {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const openPlayer = () => setIsPlayerOpen(true);

  return (
    <>
      <Playlist tracks={tracks} onPlay={openPlayer} />
      <Player track={tracks[0]} isOpen={isPlayerOpen} />
    </>
  );
};

export default App;
