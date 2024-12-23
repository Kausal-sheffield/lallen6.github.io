import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.


const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initializeParticles = async () => {
      try {
        await initParticlesEngine(async (engine) => {
          await loadSlim(engine);
        });
        setInit(true);
      } catch (error) {
        console.error("Failed to initialize particles:", error);
        // Fallback to basic background if particles fail
        document.body.style.backgroundColor = "#f5f5f5";
      }
    };

    // Wrap initialization in requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      initializeParticles();
    });

    return () => {
      // Cleanup
      setInit(false);
    };
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#f5f5f5",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 10,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
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
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) {
    return (
      <div
        style={{
          backgroundColor: "#f5f5f5",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1
        }}
      />
    );
  }

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={(container) => {
        console.log("Particles container loaded:", container);
      }}
      options={options}
      style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}
    />
  );
};

export default ParticleBackground;