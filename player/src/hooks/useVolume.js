import { useRef } from "react";

const useVolume = (setProgress, playerRef) => {
  // useRef instead of useState because:
  //   1. useRef values are updated instantly, useState only updates the value on a rerender -> prevents glitches here
  //   2. we do not need to display the value
  const isVolumeRef = useRef(false);

  const onVolumeStart = () => {
    isVolumeRef.current = true;
  };

  const onVolume = (value) => setProgress(value);

  const onVolumeEnd = (value) => {
    playerRef.current.VolumeTo(value);
    isVolumeRef.current = false;
    setProgress(value);
  };

  return { isVolumeRef, onVolumeStart, onVolume, onVolumeEnd };
};

export default useVolume;
