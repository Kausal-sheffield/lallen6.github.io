import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Background = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container); // we want the particles to fit inside a predetermined container
  };

  const options = {
    background: {
      color: {
        value: "#f5f5f5",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 2,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
          maxSpeed: 4,
          speed: 2,
        },
      },
    },
    particles: {
      color: {
        value: "#393e41",
      },
      links: {
        color: "#393e41",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1.5,
      },
      fullScreen: true,
      collisions: {
        enable: false,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "hexagon",
      },
      size: {
        value: { min: 1, max: 10 },
      },
    },
    detectRetina: true,
  };

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
};

export default Background;
