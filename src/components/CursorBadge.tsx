"use client";

import { useEffect, useRef } from "react";
import { ArrowIcon } from "./ArrowIcon";
import styles from "./CursorBadge.module.css";

/** "Click to view" pill that follows the pointer over elements marked with `data-cursor="view"`. */
export function CursorBadge() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const badge = ref.current;
    if (!badge || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;
    let visible = false;

    const render = () => {
      current.x += (target.x - current.x) * 0.2;
      current.y += (target.y - current.y) * 0.2;
      badge.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      frame =
        Math.abs(target.x - current.x) > 0.1 || Math.abs(target.y - current.y) > 0.1
          ? requestAnimationFrame(render)
          : 0;
    };

    const onMove = (event: PointerEvent) => {
      const over = (event.target as Element | null)?.closest?.('[data-cursor="view"]');
      target.x = event.clientX + 12;
      target.y = event.clientY + 12;
      if (!!over !== visible) {
        visible = !!over;
        if (visible) {
          current.x = target.x;
          current.y = target.y;
        }
        badge.dataset.visible = String(visible);
      }
      if (!frame) frame = requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className={styles.badge} data-visible="false" aria-hidden="true">
      <span className={styles.pill}>
        Click to view
        <ArrowIcon className={styles.arrow} />
      </span>
    </div>
  );
}
