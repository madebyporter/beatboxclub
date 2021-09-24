import React from "react";
import Track from "./Track";

const Playlist = ({
  tracks,
  currentTrackId,
  playingState: { isPlaying, onPlay, onPause },
}) => {
  return (
    <section className="block block-section block-resources">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="box-tracks">
              {tracks.map((track) => {
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
