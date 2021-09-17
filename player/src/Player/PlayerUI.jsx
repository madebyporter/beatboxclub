import React from "react";

const PlayerUI = ({
  track,
  isPlaying,
  isLooping,
  onPlayClick,
  onPauseClick,
  onBackClick,
  onNextClick,
  onToggleLoopingClick,
}) => (
  <div
    className={`box-list ${track.beatType} ${isPlaying ? "playing" : "paused"}`}
  >
    <div className="row">
      <div className="col-12">
        <div className="row box-main">
          <div className="col-4 col-sm-3 col-md-3 col-lg-2 box-player-container">
            <div className="box-player">
              <div onClick={onBackClick}>
                <i className="fas fa-backward" />
              </div>
              <div className="box-player-play" onClick={onPlayClick}>
                <i className="fas fa-play" />
              </div>
              <div className="box-player-pause" onClick={onPauseClick}>
                <i className="fas fa-pause" />
              </div>
              <div onClick={onNextClick}>
                <i className="fas fa-forward" />
              </div>
              <div
                className={`box-player-loop ${isLooping ? "looping" : ""}`}
                onClick={onToggleLoopingClick}
              >
                <i className="fas fa-redo" />
              </div>
            </div>
          </div>
          <div className="col-8 col-sm-9 col-md-9 col-lg-10 box-meta-container">
            <h5 className="box-title">{track.name}</h5>
            <div className="box-meta">
              <div className="box-meta-ele">
                <span className="box-meta-author">by {track.author}</span>
              </div>
              <div className="box-meta-ele">
                <span className="box-meta-bpm">BPM {track.bpm}</span>
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

export default PlayerUI;
