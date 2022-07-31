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
    <section className="block block-section margin-top-none">

      <div className="box-tracks">
        <div className="box-tracks-head">
          <div className="box-list box-list-th">
            <div className="box-list-td box-track-controls"></div>
            <div className="box-list-td box-track-name">
              <span className="box-list-td-value">Track Name</span>
            </div>
            <div className="box-list-td box-track-genre">
              <span className="box-list-td-value">Genre</span>
            </div>
            <div className="box-list-td box-track-vibe">
              <span className="box-list-td-value">Vibe</span>
            </div>
            <div className="box-list-td box-track-bpm">
              <span className="box-list-td-value">BPM</span>
            </div>
            <div className="box-list-td box-track-download align-self-end"></div>
          </div>
        </div>
        <div className="box-tracks-body">
          {tracks.map((track) => {
            const visibilitySettings =
              user &&
              user.app_metadata.roles?.some((role) => role === track.author)
                ? track.privateSettings
                : track.publicSettings;

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
            
    </section>
  );
};

export default Playlist;
