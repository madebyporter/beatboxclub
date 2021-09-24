import { useEffect, useState } from "react";
import useSeek from "./useSeek";

const usePlaybackProgress = (currentTrack, playerRef) => {
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // Reset progress to 0 when track changes
  useEffect(() => setProgress(0), [currentTrack?.id]);

  const { isSeekingRef, onSeekStart, onSeek, onSeekEnd } = useSeek(
    setProgress,
    playerRef
  );

  const onProgressChanged = (value) => {
    if (!isSeekingRef.current) setProgress(value);
  };

  return {
    progress,
    duration,
    onProgressChanged,
    onDurationChanged: setDuration,
    onSeekStart,
    onSeek,
    onSeekEnd,
  };
};

export default usePlaybackProgress;
