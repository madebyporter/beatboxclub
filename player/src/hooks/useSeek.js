import { useRef } from "react";

const useSeek = (setProgress, playerRef) => {
  // useRef instead of useState because:
  //   1. useRef values are updated instantly, useState only updates the value on a rerender -> prevents glitches here
  //   2. we do not need to display the value
  const isSeekingRef = useRef(false);

  const onSeekStart = () => {
    isSeekingRef.current = true;
  };

  const onSeek = (value) => setProgress(value);

  const onSeekEnd = (value) => {
    playerRef.current.seekTo(value);
    isSeekingRef.current = false;
    setProgress(value);
  };

  return { isSeekingRef, onSeekStart, onSeek, onSeekEnd };
};

export default useSeek;
