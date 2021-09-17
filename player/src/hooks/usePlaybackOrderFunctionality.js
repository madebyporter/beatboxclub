import useIsLooping from "./useIsLooping";
import useIsShuffling from "./useIsShuffling";
import useTrackOrder from "./useTrackOrder";
import useStepCallbacks from "./useStepCallbacks";

const usePlaybackOrderFunctionality = (
  tracks,
  setCurrentTrackId,
  playerRef
) => {
  const { isLooping, onToggleIsLooping } = useIsLooping();
  const { isShuffling, onToggleIsShuffling } = useIsShuffling();

  const trackOrder = useTrackOrder(tracks, isShuffling);

  const { onStepBack, onStepForward } = useStepCallbacks(
    trackOrder,
    setCurrentTrackId,
    playerRef
  );

  return {
    isLooping,
    isShuffling,
    onToggleIsLooping,
    onToggleIsShuffling,
    onStepBack,
    onStepForward,
  };
};

export default usePlaybackOrderFunctionality;
