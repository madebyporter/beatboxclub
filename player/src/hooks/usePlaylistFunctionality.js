import usePlayingState from "./usePlayingState";
import usePlaybackOrderFunctionality from "./usePlaybackOrderFunctionality";
import useSortedTracks from "./useSortedTracks";
import useCurrentTrack from "./useCurrentTrack";

const usePlaylistFunctionality = (unsortedTracks, playerRef) => {
  const tracks = useSortedTracks(unsortedTracks);

  const { currentTrack, setCurrentTrackId } = useCurrentTrack(tracks);

  const { isPlaying, onPlay, onPause } = usePlayingState(
    currentTrack,
    setCurrentTrackId
  );

  const {
    isLooping,
    isShuffling,
    onToggleIsLooping,
    onToggleIsShuffling,
    onStepBack,
    onStepForward,
  } = usePlaybackOrderFunctionality(tracks, setCurrentTrackId, playerRef);

  return {
    tracks,
    currentTrack,
    isPlaying,
    isLooping,
    isShuffling,
    onPlay,
    onPause,
    onToggleIsLooping,
    onToggleIsShuffling,
    onStepBack,
    onStepForward,
  };
};

export default usePlaylistFunctionality;
