import { useState } from "react";

/**
 * Single-track looping. The whole playlist loops by default.
 */
const useIsLooping = () => {
  const [isLooping, setIsLooping] = useState(false);

  const onToggleIsLooping = () => setIsLooping((value) => !value);

  return { isLooping, onToggleIsLooping };
};

export default useIsLooping;
