import { useRef } from "react";

const usePlayerFunctionality = (onPlayPrevious) => {
  const playerRef = useRef();

  const onBackClick = () => {
    const player = playerRef.current;

    if (player && player.getCurrentTime() > 3) player.seekTo(0);
    else onPlayPrevious();
  };

  return { playerRef, onBackClick };
};

export default usePlayerFunctionality;
