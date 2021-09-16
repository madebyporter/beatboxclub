import React from "react";
import Track from "./Track";

const trackComparisonFunction = (track1, track2) => {
  return track1.createdAt === track2.createdAt
    ? 0
    : track1.createdAt > track2.createdAt
    ? -1
    : 1;
};

const Playlist = ({ tracks, onPlay }) => {
  const sortedTracks = [...tracks].sort(trackComparisonFunction);

  return (
    <section className="block block-section block-resources">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="box-tracks">
              {sortedTracks.map((track) => (
                <Track key={track.id} track={track} onPlay={onPlay} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Playlist;
