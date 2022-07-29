import { trackVisibility } from "../hooks/util";

const getPreviousTrackId = (trackId, trackOrder) => {
  const trackIndex = trackOrder.indexOf(trackId);
  const previousIndex =
    (trackOrder.length + trackIndex - 1) % trackOrder.length;

  return trackOrder[previousIndex];
};

const getNextTrackId = (trackId, trackOrder) => {
  const trackIndex = trackOrder.indexOf(trackId);
  const nextIndex = (trackIndex + 1) % trackOrder.length;

  return trackOrder[nextIndex];
};

const isHidden = (user, tracks, nextId) => {
  const nextTrack = tracks.find((track) => track.id === nextId);
  const visibility = user
    ? nextTrack.privateSettings
    : nextTrack.publicSettings;
  return visibility === trackVisibility.HIDDEN;
};

const useStepCallbacks = (
  user,
  trackOrder,
  setCurrentTrackId,
  playbackProgress
) => {
  const onStepBack = () => {
    if (playbackProgress.progress > 3) {
      playbackProgress.onSeekEnd(0);
    } else {
      setCurrentTrackId((currentId) => {
        let nextId = currentId;

        while (true) {
          nextId = getPreviousTrackId(nextId, trackOrder);
          if (!isHidden(user, tracks, nextId)) break;
        }

        return nextId;
      });
    }
  };

  const onStepForward = () => {
    setCurrentTrackId((currentId) => {
      let nextId = currentId;

      while (true) {
        nextId = getNextTrackId(nextId, trackOrder);
        if (!isHidden(user, tracks, nextId)) break;
      }

      return nextId;
    });
  };

  return { onStepBack, onStepForward };
};

export default useStepCallbacks;
