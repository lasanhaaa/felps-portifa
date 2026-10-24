"use client";

import { DotLottieReact, setWasmUrl } from "@lottiefiles/dotlottie-react";

// Copied into /public by `npm install` (scripts/copy-lottie-wasm.mjs).
setWasmUrl("/dotlottie-player.wasm");

type Props = { src: string; className?: string };

export function LottieIcon({ src, className }: Props) {
  return (
    <span className={className} aria-hidden="true">
      <DotLottieReact src={src} autoplay loop renderConfig={{ autoResize: true }} />
    </span>
  );
}
