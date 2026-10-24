"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { NowPlaying as NowPlayingData } from "@/lib/lastfm";
import styles from "./NowPlaying.module.css";

const REFRESH_MS = 30_000;

type State = { kind: "loading" } | { kind: "error" } | { kind: "disabled" } | { kind: "ready"; data: NowPlayingData };

/** "Listening now" widget fed by Last.fm (port of the Framer code component). */
export function NowPlaying({ className }: { className?: string }) {
  const [state, setState] = useState<State>({ kind: "loading" });

  useEffect(() => {
    let active = true;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const load = async () => {
      try {
        const res = await fetch("/api/now-playing", { cache: "no-store" });
        if (res.status === 503) {
          if (active) setState({ kind: "disabled" });
          return;
        }
        if (!res.ok) throw new Error(String(res.status));
        const data = (await res.json()) as NowPlayingData;
        if (active) setState({ kind: "ready", data });
      } catch {
        if (active) setState({ kind: "error" });
      }
      if (active) timer = setTimeout(load, REFRESH_MS);
    };

    load();
    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, []);

  if (state.kind === "disabled") return null;

  return (
    <div className={`${styles.widget} ${className ?? ""}`} aria-live="polite">
      <span className={styles.label}>Listening now</span>
      {state.kind === "ready" && state.data.status === "playing" ? (
        <a className={styles.row} href={state.data.url} target="_blank" rel="noopener noreferrer">
          {state.data.image && (
            <Image
              className={styles.artwork}
              src={state.data.image}
              alt={`${state.data.name} cover`}
              width={24}
              height={24}
              unoptimized
            />
          )}
          <span className={styles.track}>
            <span className={styles.name}>{state.data.name}</span>
            <span className={styles.artist}>{state.data.artist}</span>
          </span>
        </a>
      ) : (
        <span className={styles.status}>
          {state.kind === "loading" && "Loading current track..."}
          {state.kind === "error" && "Error: Failed to fetch data from Last.fm"}
          {state.kind === "ready" && "Not listening to anything right now."}
        </span>
      )}
    </div>
  );
}
