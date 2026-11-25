import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { publishLenis } from "./lenisBus";

gsap.registerPlugin(ScrollTrigger);

/**
 * Lenis smooth scroll, driven on one RAF loop and synced to GSAP ScrollTrigger
 * so scroll-scrubbed animations stay in lockstep with the wheel. Disabled
 * entirely for reduced-motion users (native scroll, no inertia).
 *
 * Returns a ref to the Lenis instance (null when disabled / reduced-motion) so
 * callers can drive anchor navigation via `lenisRef.current.scrollTo(...)`.
 */
export const useLenis = (enabled = true) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;
    publishLenis(lenis);

    lenis.on("scroll", ScrollTrigger.update);

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      publishLenis(null);
    };
  }, [enabled]);

  return lenisRef;
};
