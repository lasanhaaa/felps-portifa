"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./HorizontalScroll.module.css";

/**
 * Pins its children and translates them horizontally while the page scrolls vertically.
 * The section is as tall as the track is wide, so one pixel of scroll moves the track
 * by roughly one pixel — the same behaviour as the Framer "scroll_2k" section.
 */
export function HorizontalScroll({ children }: { children: ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const sticky = stickyRef.current;
    const track = trackRef.current;
    if (!outer || !sticky || !track) return;

    let travel = 0;
    let distance = 0;
    let stickyTop = 0;
    let frame = 0;

    const update = () => {
      frame = 0;
      if (distance <= 0) return;
      const progress = Math.min(Math.max((stickyTop - outer.getBoundingClientRect().top) / distance, 0), 1);
      track.style.transform = `translate3d(${-progress * travel}px, 0, 0)`;
    };

    const measure = () => {
      if (!outer.offsetParent) {
        outer.style.height = "";
        distance = 0;
        return;
      }
      stickyTop = parseFloat(getComputedStyle(sticky).top) || 0;
      travel = Math.max(track.scrollWidth - sticky.clientWidth, 0);
      outer.style.height = `${track.scrollWidth + sticky.offsetHeight}px`;
      distance = track.scrollWidth;
      update();
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    measure();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={outerRef} className={styles.outer}>
      <div ref={stickyRef} className={styles.sticky}>
        <div ref={trackRef} className={styles.track}>
          {children}
        </div>
      </div>
    </div>
  );
}
