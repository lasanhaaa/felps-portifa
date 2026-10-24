"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import styles from "./Reveal.module.css";

type Props = { as?: ElementType; className?: string; children: ReactNode; id?: string };

/**
 * Framer "appear" effect used on the page: fades in while scaling from 0.9 → 1
 * whenever the element enters the viewport (and resets when it leaves, like `animateOnce: false`).
 */
export function Reveal({ as: Tag = "div", className, children, id }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} id={id} className={`${styles.reveal} ${className ?? ""}`} data-visible={visible}>
      {children}
    </Tag>
  );
}
