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

const useStepCallbacks = (trackOrder, setCurrentTrackId, playbackProgress) => {
  const onStepBack = () => {
    if (playbackProgress.progress > 3) {
      playbackProgress.onSeekEnd(0);
    } else {
      setCurrentTrackId((currentId) =>
        getPreviousTrackId(currentId, trackOrder)
      );
    }
  };

  const onStepForward = () =>
    setCurrentTrackId((currentId) => getNextTrackId(currentId, trackOrder));

  return { onStepBack, onStepForward };
};

export default useStepCallbacks;
