import React from "react";
import ReactSlider from "react-slider";

const formatDuration = (seconds) =>
  Math.floor(seconds / 60) +
  ":" +
  Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");

const PlayerInner = ({
  track,
  isPlaying,
  onPlayClick,
  onPauseClick,
  progress,
  duration,
  onSeekStart,
  onSeek,
  onSeekEnd,
  isLooping,
  isShuffling,
  onToggleLoopingClick,
  onToggleShufflingClick,
  onStepBackClick,
  onStepForwardClick,
  volume,
  onVolumeChange,
}) => (
  <div
    className={`box-list ${track.beatType} ${isPlaying ? "playing" : "paused"}`}
  >
    <div className="box-player-controls">
      <div onClick={onStepBackClick} className="box-player-prev box-player-control-direction">
        <i className="fas fa-step-backward" />
      </div>
      <div className="box-player-play box-player-control-activate" onClick={onPlayClick}>
        <i className="fas fa-play" />
      </div>
      <div className="box-player-pause box-player-control-activate" onClick={onPauseClick}>
        <i className="fas fa-pause" />
      </div>
      <div onClick={onStepForwardClick} className="box-player-next box-player-control-direction">
        <i className="fas fa-step-forward" />
      </div>
    </div>
    <div className="box-meta">
      <div className="box-meta-ele box-meta-main">
        <h4 className="box-meta-name">{track.name}</h4>
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
    <div className="box-player-progress-container">
      <div className="box-player-progress">
        <ReactSlider
          min={0}
          max={duration}
          step={0.1}
          value={progress}
          onBeforeChange={onSeekStart}
          onChange={onSeek}
          onAfterChange={onSeekEnd}
          className="box-player-progress-bar"
          trackClassName="box-player-progress-bar-track"
          thumbClassName="box-player-progress-bar-thumb"
        />
      </div>
    </div>
    <div className="box-player-progress-text">
      {formatDuration(progress)} / {formatDuration(duration)}
    </div>
    <div className="box-player-tools">
      <div className={'box-player-volume'}>
      <ReactSlider
          min={0}
          max={1}
          step={0.1}
          value={volume}
          // onBeforeChange={volume}
          onChange={onVolumeChange}
          // onAfterChange={volume}
          className="box-player-progress-bar"
          trackClassName="box-player-progress-bar-track"
          thumbClassName="box-player-progress-bar-thumb"
        />
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
);

export default PlayerInner;
