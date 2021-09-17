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

const useStepCallbacks = (trackOrder, setCurrentTrackId, playerRef) => {
  const onStepBack = () => {
    const player = playerRef.current;

    if (player && player.getCurrentTime() > 3) {
      player.seekTo(0);
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
