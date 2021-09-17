import { useState } from "react";
import { getTrackWithId } from "./util";

const useCurrentTrack = (tracks) => {
  const [currentTrackId, setCurrentTrackId] = useState(undefined);

  const currentTrack = currentTrackId
    ? getTrackWithId(tracks, currentTrackId)
    : undefined;

  return { currentTrack, setCurrentTrackId };
};

export default useCurrentTrack;
