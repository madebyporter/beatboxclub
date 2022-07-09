import { useState } from "react";

const usePlaybackVolume = () => {
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const [cachedVolume, setCachedVolume] = useState(1);

  const onChangeVolumeStart = (value) => {
    isMuted && setIsMuted(false);

    setCachedVolume(value);
  };

  const onChangeVolume = (value) => {
    setVolume(value);
  };

  const onChangeVolumeEnd = (value) => {
    value === 0 ? setIsMuted(true) : setCachedVolume(value);
  };

  const onMute = () => {
    isMuted && setVolume(cachedVolume);

    setIsMuted(!isMuted);
  };

  return {
    volume,
    isMuted,
    onChangeVolumeStart,
    onChangeVolume,
    onChangeVolumeEnd,
    onMute,
  };
};

export default usePlaybackVolume;
