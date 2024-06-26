"use client";

import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import type { ISourceOptions } from 'tsparticles-engine';

const ParticlesBackground: React.FC = () => {
    const particlesInit = async (main: Engine) => {
        await loadFull(main);
    };

    const particlesOptions: ISourceOptions = {
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
                outModes: "out",
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
                value: 10,
            },
            opacity: {
                value: 0.5,
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
