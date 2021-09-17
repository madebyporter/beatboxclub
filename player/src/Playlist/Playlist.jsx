import React from "react";
import Track from "./Track";

const trackComparisonFunction = (track1, track2) => {
  return track1.createdAt === track2.createdAt
    ? 0
    : track1.createdAt > track2.createdAt
    ? -1
    : 1;
};

const Playlist = ({ tracks, currentTrackId, isPlaying, onPlay, onPause }) => {
  const sortedTracks = [...tracks].sort(trackComparisonFunction);

  return (
    <section className="block block-section block-resources">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="box-tracks">
              {sortedTracks.map((track) => {
                const isCurrentTrack = currentTrackId === track.id;
                const isTrackPlaying = isCurrentTrack && isPlaying;

                return (
                  <Track
                    key={track.id}
                    track={track}
                    isCurrentTrack={isCurrentTrack}
                    isPlaying={isTrackPlaying}
                    onPlay={() => onPlay(track.id)}
                    onPause={onPause}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Playlist;
