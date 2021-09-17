import { useState } from "react";
import { getTrackIndexForTrackId } from "./util";

const usePlaylistFunctionality = (tracks) => {
  const [currentTrackId, setCurrentTrackId] = useState(undefined);
  const [isPlaying, setIsPlaying] = useState(false);

  const onPlay = (trackId) => {
    if (typeof trackId === "string") setCurrentTrackId(trackId);
    else if (!currentTrackId)
      throw new Error("No trackId selected for playback");

    setIsPlaying(true);
  };

  const onPause = () => setIsPlaying(false);

  const onPlayPrevious = () => {
    setCurrentTrackId((currentId) => {
      const trackIndex = getTrackIndexForTrackId(tracks, currentId);
      const previousIndex = (tracks.length + trackIndex - 1) % tracks.length;
      const previousTrackId = tracks[previousIndex].id;

      return previousTrackId;
    });
  };

  const onPlayNext = () => {
    setCurrentTrackId((currentId) => {
      const trackIndex = getTrackIndexForTrackId(tracks, currentId);
      const nextIndex = (trackIndex + 1) % tracks.length;
      const nextTrackId = tracks[nextIndex].id;

      return nextTrackId;
    });
  };

  return {
    currentTrackId,
    isPlaying,
    onPlay,
    onPause,
    onPlayPrevious,
    onPlayNext,
  };
};

export default usePlaylistFunctionality;
