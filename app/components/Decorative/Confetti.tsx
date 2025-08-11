"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles"; // loads all shapes/presets
import type { IOptions, RecursivePartial } from "@tsparticles/engine";

import { useEffect, useState } from "react";

export default function Confetti() {
  const [init, setInit] = useState(false);

  // Initialize tsParticles engine once
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: RecursivePartial<IOptions> = {
    fullScreen: {
      // zIndex: 0,
    },
    particles: {
      color: { value: ["#FFFFFF", "#FF0000"] },
      move: {
        direction: "bottom",
        enable: true,
        outModes: { default: "out" },
        size: true,
        speed: { min: 1, max: 3 },
      },
      number: {
        value: 250,
        density: { enable: true },
      },
      opacity: {
        value: 0.9,
        animation: {
          enable: false,
          startValue: "max",
          destroy: "min",
          speed: 0.3,
          sync: true,
        },
      },
      rotate: {
        value: { min: 0, max: 360 },
        direction: "random",
        move: true,
        animation: { enable: true, speed: 60 },
      },
      tilt: {
        direction: "random",
        enable: true,
        move: true,
        value: { min: 0, max: 360 },
        animation: { enable: true, speed: 60 },
      },
      shape: {
        type: ["circle", "square", "polygon"],
        options: {
          polygon: [{ sides: 5 }, { sides: 6 }],
        },
      },
      size: { value: { min: 2, max: 4 } },
      roll: {
        darken: { enable: true, value: 30 },
        enlighten: { enable: true, value: 30 },
        enable: true,
        speed: { min: 15, max: 25 },
      },
      wobble: {
        distance: 10,
        enable: true,
        move: true,
        speed: { min: -15, max: 15 },
      },
    },
  };

  // Don't render until initialized
  return init ? <Particles id="tsparticles" options={options} /> : null;
}
