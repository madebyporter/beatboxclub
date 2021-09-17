import { useRef } from "react";
import useIsLooping from "./useIsLooping";
import useOnBackClick from "./useOnBackClick";

const usePlayerFunctionality = (onPlayPrevious) => {
  const playerRef = useRef();

  const { isLooping, toggleIsLooping } = useIsLooping();
  const onBackClick = useOnBackClick(playerRef, onPlayPrevious);

  return {
    playerRef,
    isLooping,
    toggleIsLooping,
    onBackClick,
  };
};

export default usePlayerFunctionality;
