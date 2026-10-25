"use client";

import type { PointerEvent } from "react";

export function ThreeDObject() {
  function tilt(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.setProperty("--tilt-x", `${-y * 18}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${x * 22}deg`);
  }

  function resetTilt(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <div
      className="three-d-scene"
      role="img"
      aria-label="Interactive floating chrome sculpture with a glass-like core and orbital rings"
      onPointerMove={tilt}
      onPointerLeave={resetTilt}
    >
      <div className="three-d-shadow" />
      <div className="three-d-object">
        <div className="three-d-halo halo-back" />
        <div className="three-d-cube">
          <span className="cube-face cube-front" />
          <span className="cube-face cube-back" />
          <span className="cube-face cube-left" />
          <span className="cube-face cube-right" />
          <span className="cube-face cube-top" />
          <span className="cube-face cube-bottom" />
        </div>
        <div className="three-d-sphere" />
        <div className="three-d-halo halo-front" />
        <div className="three-d-satellite satellite-one" />
        <div className="three-d-satellite satellite-two" />
        <span className="three-d-spark spark-one">✳</span>
        <span className="three-d-spark spark-two">✦</span>
      </div>
      <span className="three-d-caption">RELAX® / OBJECT STUDY 001</span>
    </div>
  );
}
