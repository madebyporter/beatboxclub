import React from "react";
import ReactGA from 'react-ga';

const eventTrack = (category, action, label) => {
  console.log("GA event:", category, ":", action, ":", label);
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  })
}

const Track = ({ track, isCurrentTrack, isPlaying, onPlay, onPause }) => (
  <div
    className={`box-list ${track.beatType} ${
      isCurrentTrack ? (isPlaying ? "playing" : "paused") : ""
    }`}
    id={track.name}
  >
    
    <div className="box-player-controls">
      <div className="box-player-play box-player-control-activate" onClick={onPlay}>
        <i className="fas fa-play" data-trackname={`${track.name}`} data-trackauthor={`${track.author}`} />
      </div>
      <div className="box-player-pause box-player-control-activate" onClick={onPause}>
        <i className="fas fa-pause" />
      </div>
    </div>

    <div className="box-player-meta">
      <div className="box-meta-ele box-meta-main">
        <h4 className="box-meta-name">{track.name}</h4>
        <span className="box-meta-author">by {track.author}</span>
      </div>
      <div className="box-meta-ele box-meta-vibe">
        <h5 className="box-meta-title">Vibe</h5>
        {track.vibe.map((vibe) => (
          <span className="box-meta-tag box-meta-value" key={vibe}>
            {vibe}
          </span>
        ))}
      </div>
      <div className="box-meta-ele box-meta-bpm">
        <h5 className="box-meta-title">BPM</h5>
        <span className="box-meta-bpm box-meta-value">{track.bpm}</span>
      </div>
    </div>

    <div className="box-player-download">
      <a className="box-player-download-link" href={track.url}><span className="d-block d-sm-none"><i className="box-player-download-icon fas fa-cloud-download"></i></span><span className="box-player-download-btn d-none d-sm-block btn btn-primary btn-small" data-trackname={`${track.name}`} data-trackauthor={`${track.author}`}>Download</span></a>
    </div>
  </div>
);

export default Track;