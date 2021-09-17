import { useState } from "react";
import usePlayingState from "./usePlayingState";
import useTrackOrderFunctionality from "./useTrackOrderFunctionality";

const usePlaylistFunctionality = (tracks) => {
  const [currentTrackId, setCurrentTrackId] = useState(undefined);

  const { isPlaying, onPlay, onPause } = usePlayingState(
    currentTrackId,
    setCurrentTrackId
  );

  const { isShuffling, onToggleShuffling, onPlayPrevious, onPlayNext } =
    useTrackOrderFunctionality(tracks, setCurrentTrackId);

  return {
    currentTrackId,
    isPlaying,
    isShuffling,
    onPlay,
    onPause,
    onPlayPrevious,
    onPlayNext,
    onToggleShuffling,
  };
};

export default usePlaylistFunctionality;
