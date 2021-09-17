import { useMemo } from "react";

/**
 * Sort by creation date, most recent first
 */
const trackComparisonFunction = (track1, track2) => {
  return track1.createdAt === track2.createdAt
    ? 0
    : track1.createdAt > track2.createdAt
    ? -1
    : 1;
};

const sortTracks = (tracks) => [...tracks].sort(trackComparisonFunction);

const useSortedTracks = (tracks) => useMemo(() => sortTracks(tracks), [tracks]);

export default useSortedTracks;
