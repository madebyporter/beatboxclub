import React, { useRef } from "react";
import ReactPlayer from "react-player";
import useSiteWrapperPlayerOnClass from "./useSiteWrapperPlayerOnClass";

// TODO: Split component

const Player = ({
  track,
  isPlaying,
  onPlay,
  onPause,
  onPlayPrevious,
  onPlayNext,
}) => {
  const isOpen = !!track;

  useSiteWrapperPlayerOnClass(isOpen);

  const playerRef = useRef();

  const onBackClick = () => {
    const player = playerRef.current;

    if (player && player.getCurrentTime() > 3) player.seekTo(0);
    else onPlayPrevious();
  };

  return (
    <aside className={`bbx-musicplayer ${isOpen ? "open" : "closed"}`}>
      {!!track && (
        <>
          <ReactPlayer
            url={track.url}
            playing={isPlaying}
            width={0}
            height={0}
            ref={playerRef}
          />

          <div
            className={`box-list ${track.beatType} ${
              isPlaying ? "playing" : "paused"
            }`}
          >
            <div className="row">
              <div className="col-12 col-md-10">
                <div className="row box-main">
                  <div className="col-3 col-sm-2 col-md-2 col-lg-1 box-player-container">
                    <div className="box-player">
                      <div onClick={onBackClick}>
                        <i className="fas fa-backward" />
                      </div>
                      <div className="box-player-play" onClick={onPlay}>
                        <i className="fas fa-play" />
                      </div>
                      <div className="box-player-pause" onClick={onPause}>
                        <i className="fas fa-pause" />
                      </div>
                      <div onClick={onPlayNext}>
                        <i className="fas fa-forward" />
                      </div>
                    </div>
                  </div>
                  <div className="col-9 col-sm-10 col-md-10 col-lg-9 box-meta-container">
                    <h5 className="box-title">{track.name}</h5>
                    <div className="box-meta">
                      <div className="box-meta-ele">
                        <span className="box-meta-author">
                          by {track.author}
                        </span>
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
        </>
      )}
    </aside>
  );
};

export default Player;
