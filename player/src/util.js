function getFindTrackByIdPredicate(trackId) {
  return ({ id }) => id === trackId;
}

export const getTrackIndexForTrackId = (tracks, trackId) =>
  tracks.findIndex(getFindTrackByIdPredicate(trackId));

export const getTrackWithId = (tracks, trackId) =>
  tracks.find(getFindTrackByIdPredicate(trackId));
