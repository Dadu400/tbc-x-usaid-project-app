"use client";

import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

const ParticlesBackground: React.FC = () => {
    const particlesInit = async (main: Engine) => {
        console.log("test");
        await loadFull(main);
    };

    const particlesOptions = {
        fpsLimit: 60,
        interactivity: {
            events: {
                onClick: {
                    enable: false
                },
                onHover: {
                    enable: false,
                    mode: "bubble"
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                bubble: {
                    distance: 40,
                    duration: 2,
                    opacity: 8,
                    size: 6,
                },
            },
        },
        particles: {
            color: {
                value: "#123123",
            },
            links: {
                enable: false,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "right",
                enable: true,
                outModes: {
                    right: "out",
                },
                random: false,
                speed: 2,
                straight: false,
                bounce: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 24,
            },
            opacity: {
                value: 1,
            },
            shape: {
                type: "image",
                image: {
                    src: "https://i.ibb.co/rxLq91n/file.png",
                    width: 200,
                    height: 200
                }
            },
            size: {
                value: { min: 8, max: 25 },
            },
        },
        detectRetina: true,
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesOptions}
        />
    );
};

export default ParticlesBackground;
