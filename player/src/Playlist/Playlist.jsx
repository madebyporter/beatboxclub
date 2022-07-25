import React from "react";
import Track from "./Track";
import { trackVisibility } from "../hooks/util";

const Playlist = ({
  user,
  tracks,
  currentTrackId,
  playingState: { isPlaying, onPlay, onPause },
}) => {
  return (
    <section className="block block-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="box-tracks">
              {tracks.map((track) => {
                const visibilitySettings =
                  user &&
                  user.app_metadata.roles?.some((role) => role === track.author)
                    ? track.memberSettings
                    : track.visitorSettings;

                const isCurrentTrack = currentTrackId === track.id;
                const isTrackPlaying = isCurrentTrack && isPlaying;

                if (visibilitySettings === trackVisibility.HIDDEN)
                  return <React.Fragment key={track.id}></React.Fragment>;

                return (
                  <Track
                    key={track.id}
                    track={track}
                    isCurrentTrack={isCurrentTrack}
                    isPlaying={isTrackPlaying}
                    onPlay={() => onPlay(track.id)}
                    onPause={onPause}
                    visibilitySettings={visibilitySettings}
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
