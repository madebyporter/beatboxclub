import { useState } from "react";

/**
 * Source: https://stackoverflow.com/a/6274381
 *
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffleArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const getTrackOrders = (tracks) => {
  const normal = tracks.map(({ id }) => id);
  const shuffle = shuffleArray([...normal]);

  return { normal, shuffle };
};

/**
 * @return {string[]} array of track ids
 */
const useTrackOrder = (tracks, isShuffling) => {
  // Generate track orders only once, then cache them in the state until the page is reloaded
  const [trackOrders] = useState(() => getTrackOrders(tracks));

  return isShuffling ? trackOrders.shuffle : trackOrders.normal;
};

export default useTrackOrder;
