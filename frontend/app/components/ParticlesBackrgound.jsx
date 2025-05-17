"use client";

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
	const [init, setInit] = useState(false);
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadFull(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = (container) => {};

	const options = useMemo(
		() => ({
			fullScreen: {
				enable: true,
				zIndex: -1,
				// IMPORTANT
			},
			background: {
				color: {
					value: "#",
				},
			},
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: {
						enable: false,
						mode: "push",
					},
					onHover: {
						enable: true,
						mode: "repulse",
					},
					resize: true,
				},
				modes: {
					push: {
						quantity: 90,
					},
					repulse: {
						distance: 150,
						duration: 0.5,
					},
				},
			},
			particles: {
				color: {
					value: "#fadb7e",
				},
				links: {
					color: "#433a60",
					distance: 200,
					enable: true,
					opacity: 0.5,
					width: 1,
				},
				collisions: {
					enabled: true,
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
						area: 800,
					},
					value: 80,
				},
				opacity: {
					value: 0.5,
				},
				shape: {
					type: "circle",
				},
				size: {
					value: { min: 0, max: 5 },
				},
			},
			detectRetina: true,
		}),
		[],
	);

	if (init) {
		return (
			<Particles
				id="tsparticles"
				particlesLoaded={particlesLoaded}
				options={options}
			/>
		);
	}

	return <></>;
};
export default ParticleBackground;
