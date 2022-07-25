export const getTrackWithId = (tracks, trackId) =>
  tracks.find(({ id }) => id === trackId);

export const trackVisibility = {
  STREAM: "Stream",
  DOWNLOAD: "MP3 Download",
  HIDDEN: "Hide",
};
