"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ReactConfetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});

export default function Confetti() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function updateSize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    updateSize();
    window.addEventListener("resize", updateSize, { passive: true });
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (windowSize.width === 0 || windowSize.height === 0) {
    return null;
  }

  return (
    <ReactConfetti
      width={windowSize.width}
      height={windowSize.height}
      recycle={false}
      numberOfPieces={500}
    />
  );
}
