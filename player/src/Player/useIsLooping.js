import { useState } from "react";

const useIsLooping = () => {
  const [isLooping, setIsLooping] = useState(false);

  const toggleIsLooping = () => setIsLooping((value) => !value);

  return { isLooping, toggleIsLooping };
};

export default useIsLooping;
