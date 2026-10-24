"use client";

import { useEffect, useRef } from "react";
import styles from "./Marquee.module.css";

const SPEED = 100; // px per second, same as the Framer ticker

type RowProps = { text: string; direction: "left" | "right"; variant: "brazil" | "since" };

function Row({ text, direction, variant }: RowProps) {
  const listRef = useRef<HTMLUListElement>(null);

  // Keep a constant speed regardless of the row width.
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const observer = new ResizeObserver(() => {
      list.style.setProperty("--duration", `${list.scrollWidth / 2 / SPEED}s`);
    });
    observer.observe(list);
    return () => observer.disconnect();
  }, []);

  // The sequence is rendered twice so translating by -50% loops seamlessly.
  const items = (copy: number) =>
    Array.from({ length: 4 }, (_, i) => [
      <li key={`${copy}-star-a-${i}`} className={styles.star}>*</li>,
      <li key={`${copy}-sans-${i}`} className={styles.sans}>{text}</li>,
      <li key={`${copy}-star-b-${i}`} className={styles.star}>*</li>,
      <li key={`${copy}-serif-${i}`} className={styles.serif}>{text}</li>,
    ]).flat();

  return (
    <div className={`${styles.row} ${styles[variant]}`}>
      <ul ref={listRef} className={styles.list} data-direction={direction}>
        {items(0)}
        {items(1)}
      </ul>
    </div>
  );
}

export function Marquee() {
  return (
    <section className={styles.marquee} aria-label="From Brazil, since 2001">
      <div aria-hidden="true" className={styles.rows}>
        <Row text="From Brazil" direction="left" variant="brazil" />
        <Row text="Since 2001" direction="right" variant="since" />
      </div>
    </section>
  );
}
