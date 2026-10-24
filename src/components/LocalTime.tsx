"use client";

import { useEffect, useState } from "react";

const format = (timeZone: string) =>
  new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit", hour12: true, timeZone }).format(new Date());

type Props = { timeZone: string; className?: string };

/** Live clock for the given time zone, e.g. "05:06 PM". */
export function LocalTime({ timeZone, className }: Props) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(format(timeZone));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timeZone]);

  return (
    <time className={className} suppressHydrationWarning>
      {time ?? " "}
    </time>
  );
}
