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
    className={`box-list ${track.beatType} ${
      isCurrentTrack ? (isPlaying ? "playing" : "paused") : ""
    }`}
    id={track.name}
  >
    <div className="box-player-controls">
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

    <div className="box-player-meta">
      <div className="box-meta-ele box-meta-main">
        <h4 className="box-meta-name">{track.name}</h4>
      </div>
      <div className="box-meta-ele box-meta-genre">
        <span className="box-meta-value">{track.genre}</span>
      </div>
      <div className="box-meta-ele box-meta-vibe">
        {track.vibe.map((vibe) => (
          <span className="box-meta-tag box-meta-value" key={vibe}>
            {vibe}
          </span>
        ))}
      </div>
      <div className="box-meta-ele box-meta-bpm">
        <span className="box-meta-value">{track.bpm}</span>
      </div>
    </div>

    <div className="box-player-download">
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
        <span className="d-block d-sm-none">
          <i className="box-player-download-icon fas fa-cloud-download"></i>
        </span>
        <span className="box-player-download-btn d-none d-sm-block component-button component-button-primary component-button-small">
          Download
        </span>
      </a>
    </div>
  </div>
);

export default Track;
