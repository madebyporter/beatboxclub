import React from "react";
import ReactGA from "react-ga";
import { trackVisibility } from "../hooks/util";

const eventTrack = (category, action, label) => {
  console.log("GA event:", category, ":", action, ":", label);
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

const Track = ({
  track,
  isCurrentTrack,
  isPlaying,
  onPlay,
  onPause,
  visibilitySettings,
}) => (
  <div
    className={`box-list box-list-tr ${track.beatType} ${
      isCurrentTrack ? (isPlaying ? "playing" : "paused") : ""
    }`}
    id={track.name}
  >
    <div className="box-list-td box-track-controls">
      <div
        className="box-player-play box-player-control-activate"
        onClick={onPlay}
      >
        <i className="fa-light fa-play" />
      </div>
      <div
        className="box-player-pause box-player-control-activate"
        onClick={onPause}
      >
        <i className="fa-light fa-pause" />
      </div>
    </div>

    <div className="box-list-td box-track-name">
      <h4 className="box-list-td-value">{track.name}</h4>
    </div>

    <div className="box-list-td box-track-genre">
      <span className="box-list-td-value">{track.genre}</span>
    </div>

    <div className="box-list-td box-track-vibe">
      {track.vibe.map((vibe) => (
        <span className="box-meta-tag box-list-td-value" key={vibe}>
          {vibe}
        </span>
      ))}
    </div>

    <div className="box-list-td box-track-bpm">
      <span className="box-list-td-value">{track.bpm}</span>
    </div>

    <div className="box-list-td box-track-download">
      <a
        className="box-player-download-link"
        href={
          visibilitySettings === trackVisibility.DOWNLOAD ? track.url : null
        }
        onClick={eventTrack.bind(
          this,
          "Tracks",
          "MBP Download Button",
          track.name
        )}
        style={{
          visibility:
            visibilitySettings === trackVisibility.DOWNLOAD
              ? "visible"
              : "hidden",
        }}
      >
        <span className="box-player-download-btn component-button component-button-tertiary component-button-small">
          <i class="fa-light fa-download"></i> MP3
        </span>
      </a>
    </div>
  </div>
);

export default Track;
