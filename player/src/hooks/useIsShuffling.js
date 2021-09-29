import { useState } from "react";

const useIsShuffling = () => {
  const [isShuffling, setIsShuffling] = useState(false);

  const onToggleIsShuffling = () => setIsShuffling((value) => !value);

  return { isShuffling, onToggleIsShuffling };
};

export default useIsShuffling;
