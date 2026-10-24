"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";
import styles from "./Reveal.module.css";

type Props = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  id?: string;
  /** Starting transform, as set on the Framer appear effect. */
  from?: string;
};

/**
 * Framer "appear" effect used on the page: fades in from the `from` transform (scale 0.9 by default)
 * whenever the element enters the viewport (and resets when it leaves, like `animateOnce: false`).
 */
export function Reveal({ as: Tag = "div", className, children, id, from }: Props) {
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
    <Tag
      ref={ref}
      id={id}
      className={`${styles.reveal} ${className ?? ""}`}
      style={from ? ({ "--reveal-from": from } as CSSProperties) : undefined}
      data-visible={visible}
    >
      {children}
    </Tag>
  );
}
