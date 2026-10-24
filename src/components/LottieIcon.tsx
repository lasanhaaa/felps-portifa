"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

type Props = { src: string; className?: string };

export function LottieIcon({ src, className }: Props) {
  return (
    <span className={className} aria-hidden="true">
      <DotLottieReact src={src} autoplay loop renderConfig={{ autoResize: true }} />
    </span>
  );
}
