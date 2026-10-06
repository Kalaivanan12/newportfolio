import React, { useEffect, useState } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const Background = () => {
    // Initialize the tsparticles engine with the slim bundle
    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    const options = {
        fullScreen: { enable: false },
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 120,
        interactivity: {
            detectsOn: "window",
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: ["grab", "bubble"],
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                grab: {
                    distance: 200,
                    links: {
                        opacity: 1,
                        color: "#f472b6"
                    }
                },
                bubble: {
                    distance: 200,
                    size: 10,
                    duration: 2,
                    opacity: 0.8,
                    speed: 3
                }
            },
        },
        particles: {
            color: {
                value: ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b"],
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: true,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 100,
            },
            opacity: {
                value: { min: 0.1, max: 0.5 },
                animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.1,
                    sync: false
                }
            },
            shape: {
                type: ["circle", "triangle"],
            },
            size: {
                value: { min: 1, max: 5 },
                animation: {
                    enable: true,
                    speed: 4,
                    minimumValue: 0.1,
                    sync: false
                }
            },
        },
        detectRetina: true,
    };

    return (
        <div className="fixed inset-0 w-full h-full -z-50 bg-dark overflow-hidden pointer-events-none">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop')` // Dark Code Screen
                }}
            ></div>

            {/* Dark Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/90 to-dark/95"></div>

            {/* Particle Network */}
            <Particles
                id="tsparticles"
                className="absolute inset-0"
                init={particlesInit}
                options={options}
            />
        </div>
    );
};

export default Background;
