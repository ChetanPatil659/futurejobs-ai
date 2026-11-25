/**
 * Tiny pub/sub so child sections can reach the single Lenis instance created by
 * `useLenis` in Home — without prop-drilling or a context refactor. Components
 * subscribe to receive the instance (immediately if it already exists) and can
 * then listen to Lenis scroll events for velocity / direction driven effects.
 */
let instance = null;
const listeners = new Set();

export const publishLenis = (lenis) => {
  instance = lenis;
  listeners.forEach((cb) => cb(lenis));
};

export const subscribeLenis = (cb) => {
  listeners.add(cb);
  if (instance) cb(instance);
  return () => listeners.delete(cb);
};
