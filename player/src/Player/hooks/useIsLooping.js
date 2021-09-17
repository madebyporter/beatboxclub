import { useState } from "react";

/**
 * Single-track looping. The whole playlist loops by default.
 */
const useIsLooping = () => {
  const [isLooping, setIsLooping] = useState(false);

  const toggleIsLooping = () => setIsLooping((value) => !value);

  return { isLooping, toggleIsLooping };
};

export default useIsLooping;
