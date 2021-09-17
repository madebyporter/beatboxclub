import React from "react";

const Track = ({ track, isCurrentTrack, isPlaying, onPlay, onPause }) => (
  <div
    className={`box-list ${track.beatType} ${
      isCurrentTrack ? (isPlaying ? "playing" : "paused") : ""
    }`}
    id={track.name}
  >
    <div className="row">
      <div className="col-12 col-md-10">
        <div className="row box-main">
          <div className="col-3 col-sm-2 col-md-2 col-lg-1 box-player-container">
            <div className="box-player">
              <div className="box-player-play" onClick={onPlay}>
                <i className="fas fa-play" />
              </div>
              <div className="box-player-pause" onClick={onPause}>
                <i className="fas fa-pause" />
              </div>
            </div>
          </div>
          <div className="col-9 col-sm-10 col-md-10 col-lg-9 box-meta-container">
            <h5 className="box-title">{track.name}</h5>
            <div className="box-meta">
              <div className="box-meta-ele">
                <span className="box-meta-author">by {track.author}</span>
              </div>
              <div className="box-meta-ele">
                <span className="box-meta-bpm">by {track.bpm}</span>
              </div>
              <div className="box-meta-ele">
                {track.vibe.map((vibe) => (
                  <span className="box-meta-tag" key={vibe}>
                    {vibe}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Track;
