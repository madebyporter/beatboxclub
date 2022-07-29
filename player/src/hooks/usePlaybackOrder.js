import useIsLooping from "./useIsLooping";
import useIsShuffling from "./useIsShuffling";
import useTrackOrder from "./useTrackOrder";
import useStepCallbacks from "./useStepCallbacks";

const usePlaybackOrder = (
  user,
  tracks,
  setCurrentTrackId,
  playbackProgress
) => {
  const { isLooping, onToggleIsLooping } = useIsLooping();
  const { isShuffling, onToggleIsShuffling } = useIsShuffling();

  const trackOrder = useTrackOrder(tracks, isShuffling);

  const { onStepBack, onStepForward } = useStepCallbacks(
    user,
    trackOrder,
    setCurrentTrackId,
    playbackProgress
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

export default usePlaybackOrder;
