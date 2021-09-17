const useOnBackClick = (playerRef, onPlayPrevious) => () => {
  const player = playerRef.current;

  if (player && player.getCurrentTime() > 3) player.seekTo(0);
  else onPlayPrevious();
};

export default useOnBackClick;
