import React from "react";

const formatDuration = (seconds) =>
  Math.floor(seconds / 60) +
  ":" +
  Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");

const PlayerInner = ({
  track,
  duration,
  progress,
  isPlaying,
  isLooping,
  isShuffling,
  onPlayClick,
  onPauseClick,
  onToggleLoopingClick,
  onToggleShufflingClick,
  onStepBackClick,
  onStepForwardClick,
}) => (
  <div
    className={`box-list ${track.beatType} ${isPlaying ? "playing" : "paused"}`}
  >
    <div className="row">
      <div className="col-12">
        <div className="row box-main">
          <div className="col-4 col-sm-3 col-md-3 col-lg-2 box-player-container">
            <div className="box-player">
              <div onClick={onStepBackClick}>
                <i className="fas fa-backward" />
              </div>
              <div className="box-player-play" onClick={onPlayClick}>
                <i className="fas fa-play" />
              </div>
              <div className="box-player-pause" onClick={onPauseClick}>
                <i className="fas fa-pause" />
              </div>
              <div onClick={onStepForwardClick}>
                <i className="fas fa-forward" />
              </div>
              <div
                className={`box-player-loop ${isLooping ? "active" : ""}`}
                onClick={onToggleLoopingClick}
              >
                <i className="fas fa-redo" />
              </div>
              <div
                className={`box-player-shuffle ${isShuffling ? "active" : ""}`}
                onClick={onToggleShufflingClick}
              >
                <i className="fas fa-random" />
              </div>
            </div>
          </div>
          <div className="col-8 col-sm-9 col-md-9 col-lg-10 box-meta-container">
            <h5 className="box-title">
              {track.name} ({formatDuration(progress)} /{" "}
              {formatDuration(duration)})
            </h5>
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

export default PlayerInner;
