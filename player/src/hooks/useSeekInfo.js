import { useEffect, useState } from "react";

const useSeekInfo = (currentTrack) => {
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  // Reset progress to 0 when track changes
  useEffect(() => setProgress(0), [currentTrack?.id]);

  return {
    duration,
    progress,
    onDurationChanged: setDuration,
    onProgressChanged: setProgress,
  };
};

export default useSeekInfo;
