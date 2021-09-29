import { useRef } from "react";
import usePlayingState from "./usePlayingState";
import usePlaybackOrder from "./usePlaybackOrder";
import useSortedTracks from "./useSortedTracks";
import useCurrentTrack from "./useCurrentTrack";
import usePlaybackProgress from "./usePlaybackProgress";

const usePlaylistFunctionality = (unsortedTracks) => {
  const playerRef = useRef();

  const tracks = useSortedTracks(unsortedTracks);
  const { currentTrack, setCurrentTrackId } = useCurrentTrack(tracks);

  const playingState = usePlayingState(currentTrack, setCurrentTrackId);
  const playbackProgress = usePlaybackProgress(currentTrack, playerRef);
  const playbackOrder = usePlaybackOrder(
    tracks,
    setCurrentTrackId,
    playbackProgress
  );

  return {
    playerRef,
    tracks,
    currentTrack,
    playingState,
    playbackProgress,
    playbackOrder,
  };
};

export default usePlaylistFunctionality;
