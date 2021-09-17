export const getTrackWithId = (tracks, trackId) =>
  tracks.find(({ id }) => id === trackId);
