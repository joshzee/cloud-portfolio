"use client";

import { useEffect } from "react";

function ArrowIcon() {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default function Footer() {
	useEffect(() => {
		fetch(
			"https://6md80xvkxi.execute-api.ap-southeast-2.amazonaws.com/default/VisitorCounter",
		)
			.then((response) => response.json())
			.then((data) => {
				document.getElementById("visitor_count").textContent =
					data["visitorcount"];
			});
	}, []);

	return (
		<footer className="mb-16">
			<ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
				<li>
					<a
						className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-[#64b7b9]"
						rel="noopener noreferrer"
						target="_blank"
						href="/rss"
					>
						<ArrowIcon />
						<p className="ml-2 h-7">linkedin</p>
					</a>
				</li>
				<li>
					<a
						className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-[#64b7b9]"
						rel="noopener noreferrer"
						target="_blank"
						href="https://github.com/joshzee"
					>
						<ArrowIcon />
						<p className="ml-2 h-7">github</p>
					</a>
				</li>
				<li>
					<a
						className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-[#64b7b9]"
						rel="noopener noreferrer"
						target="_blank"
						href="https://github.com/joshzee/cloud-portfolio"
					>
						<ArrowIcon />
						<p className="ml-2 h-7">view source</p>
					</a>
				</li>
			</ul>
			<div className="flex flex-row justify-between">
				<p className="mt-8 text-neutral-600 dark:text-neutral-300">
					© {new Date().getFullYear()} MIT Licensed
				</p>
				<p className="mt-8 text-neutral-400 dark:text-neutral-300">
					Website Views:{" "}
					<span className="text-[#64b7b9] font-bold" id="visitor_count"></span>
				</p>
			</div>
		</footer>
	);
}
