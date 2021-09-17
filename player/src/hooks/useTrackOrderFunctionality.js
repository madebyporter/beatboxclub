import { useState } from "react";
import useTrackOrder from "./useTrackOrder";

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

const useTrackOrderFunctionality = (tracks, setCurrentTrackId) => {
  const [isShuffling, setIsShuffling] = useState(false);

  const onToggleShuffling = () => setIsShuffling((value) => !value);

  const trackOrder = useTrackOrder(tracks, isShuffling);

  const onPlayPrevious = () =>
    setCurrentTrackId((currentId) => getPreviousTrackId(currentId, trackOrder));

  const onPlayNext = () =>
    setCurrentTrackId((currentId) => getNextTrackId(currentId, trackOrder));

  return { isShuffling, onToggleShuffling, onPlayPrevious, onPlayNext };
};

export default useTrackOrderFunctionality;
