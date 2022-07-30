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
  volume,
  onSeekStart,
  onSeek,
  onSeekEnd,
  onChangeVolumeStart,
  onChangeVolume,
  onChangeVolumeEnd,
  onMute,
  isLooping,
  isShuffling,
  isMuted,
  onToggleLoopingClick,
  onToggleShufflingClick,
  onStepBackClick,
  onStepForwardClick,
}) => (
  <div
    className={`box-list ${track.beatType} ${isPlaying ? "playing" : "paused"}`}
  >
    <div className="box-player-controls">
      <div
        onClick={onStepBackClick}
        className="box-player-prev box-player-control-direction"
      >
        <i className="fa-light fa-step-backward" />
      </div>
      <div
        className="box-player-play box-player-control-activate"
        onClick={onPlayClick}
      >
        <i className="fa-light fa-play" />
      </div>
      <div
        className="box-player-pause box-player-control-activate"
        onClick={onPauseClick}
      >
        <i className="fa-light fa-pause" />
      </div>
      <div
        onClick={onStepForwardClick}
        className="box-player-next box-player-control-direction"
      >
        <i className="fa-light fa-step-forward" />
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
      <div
        className={`box-player-shuffle ${isShuffling ? "active" : ""}`}
        onClick={onToggleShufflingClick}
      >
        <i className="fa-light fa-repeat" />
      </div>
      <div
        className={`box-player-loop ${isLooping ? "active" : ""}`}
        onClick={onToggleLoopingClick}
      >
        <i className="fa-light fa-shuffle" />
      </div>
    
      <div className="box-player-volume">
        <i
          className={`box-player-volume-icon fa-light ${isMuted ? "fa-volume-slash" : "fa-volume"}`}
          onClick={onMute}
        />
        <div class="box-player-progress-container">
          <ReactSlider
            min={0}
            max={1}
            step={0.01}
            value={isMuted ? 0 : volume}
            onBeforeChange={onChangeVolumeStart}
            onChange={onChangeVolume}
            onAfterChange={onChangeVolumeEnd}
            style={{ width: 100 }}
            className="box-player-progress-bar"
            trackClassName="box-player-progress-bar-track"
            thumbClassName="box-player-progress-bar-thumb"
          />
        </div>
      </div>
    </div>
  </div>
);

export default PlayerInner;
