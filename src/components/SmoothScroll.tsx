"use client";

import Lenis from "lenis";
import { useEffect } from "react";

/** Same smooth scrolling as the Framer "Smooth Scroll" component (intensity 10 → 1s). */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ duration: 1, anchors: true });
    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
