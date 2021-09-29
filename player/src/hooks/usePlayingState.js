import { useState } from "react";

const usePlayingState = (currentTrackId, setCurrentTrackId) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const onPlay = (trackId) => {
    setCurrentTrackId(trackId);
    setIsPlaying(true);
  };

  const onPause = () => setIsPlaying(false);

  return { isPlaying, onPlay, onPause };
};

export default usePlayingState;
