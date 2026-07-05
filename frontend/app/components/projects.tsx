"use client";

import { useEffect, useId, useState, type ReactNode } from "react";

type ProjectProps = {
	title: string;
	summary: string;
	description: ReactNode;
	imageSrc?: string;
	imageAlt?: string;
	cardImageSrc?: string;
	cardImageAlt?: string;
	modalImageSrc?: string;
	modalImageAlt?: string;
	websiteUrl?: string;
	githubUrl?: string;
};

function ArrowIcon() {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<path
				d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
				fill="currentColor"
			/>
		</svg>
	);
}

function ProjectLink({ href, label }: { href: string; label: string }) {
	return (
		<a
			className="inline-flex min-h-7 items-center transition-all hover:text-neutral-800 dark:hover:text-[#64b7b9]"
			rel="noopener noreferrer"
			target="_blank"
			href={href}
		>
			<ArrowIcon />
			<span className="ml-2 h-7">{label}</span>
		</a>
	);
}

export function Project({
	title,
	summary,
	description,
	imageSrc,
	imageAlt,
	cardImageSrc,
	cardImageAlt,
	modalImageSrc,
	modalImageAlt,
	websiteUrl,
	githubUrl,
}: ProjectProps) {
	const [isOpen, setIsOpen] = useState(false);
	const titleId = useId();
	const cardImage = cardImageSrc ?? imageSrc;
	const cardAlt = cardImageAlt ?? imageAlt ?? `${title} preview`;
	const modalImage = modalImageSrc ?? imageSrc ?? cardImageSrc;
	const modalAlt = modalImageAlt ?? imageAlt ?? cardImageAlt ?? `${title} preview`;

	useEffect(() => {
		if (!isOpen) {
			return;
		}

		const closeOnEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsOpen(false);
			}
		};

		document.addEventListener("keydown", closeOnEscape);
		return () => document.removeEventListener("keydown", closeOnEscape);
	}, [isOpen]);

	return (
		<article className="border-t border-neutral-200 py-6 dark:border-neutral-800">
			<div className="grid gap-4 sm:grid-cols-[144px_1fr] sm:items-start">
				{cardImage ? (
					<img
						className="aspect-video w-full rounded object-cover sm:aspect-square"
						src={cardImage}
						alt={cardAlt}
					/>
				) : null}
				<div className={cardImage ? "min-w-0" : "sm:col-span-2"}>
					<h2 className="text-xl font-semibold tracking-tighter text-[#fadb7e]">{title}</h2>
					<p className="mt-2 text-neutral-900 dark:text-neutral-100">
						{summary}
					</p>
					<div className="font-sm mt-4 flex flex-wrap gap-x-4 gap-y-2 text-neutral-600 dark:text-neutral-300">
						{websiteUrl ? <ProjectLink href={websiteUrl} label="website" /> : null}
						{githubUrl ? <ProjectLink href={githubUrl} label="github" /> : null}
						<button
							className="inline-flex min-h-7 cursor-pointer items-center text-left transition-all hover:text-neutral-800 dark:hover:text-[#fadb7e]"
							type="button"
							onClick={() => setIsOpen(true)}
						>
							<ArrowIcon />
							<span className="ml-2 h-7">details</span>
						</button>
					</div>
				</div>
			</div>

			{isOpen ? (
				<div
					className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 px-0 py-0 sm:items-center sm:px-4 sm:py-8"
					role="dialog"
					aria-modal="true"
					aria-labelledby={titleId}
					onMouseDown={() => setIsOpen(false)}
				>
					<div
						className="max-h-[92svh] w-full max-w-2xl overflow-y-auto rounded-t border border-neutral-200 bg-white p-5 text-black shadow-xl dark:border-neutral-800 dark:bg-[#0e1014] dark:text-white sm:max-h-[90vh] sm:rounded sm:p-6"
						onMouseDown={(event) => event.stopPropagation()}
					>
						<div className="flex items-start justify-between gap-4">
							<h2
								id={titleId}
								className="text-2xl font-semibold tracking-tighter text-[#fadb7e]"
							>
								{title}
							</h2>
							<button
								className="cursor-pointer text-sm text-neutral-600 transition-all hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-[#fadb7e]"
								type="button"
								onClick={() => setIsOpen(false)}
							>
								close
							</button>
						</div>
						{modalImage ? (
							<img
								className="mt-5 aspect-video w-full rounded object-cover"
								src={modalImage}
								alt={modalAlt}
							/>
						) : null}
						<div className="mt-5 space-y-4 text-neutral-900 dark:text-neutral-100">
							{description}
						</div>
						{websiteUrl || githubUrl ? (
							<div className="font-sm mt-6 flex flex-wrap gap-x-4 gap-y-2 text-neutral-600 dark:text-neutral-300">
								{websiteUrl ? (
									<ProjectLink href={websiteUrl} label="website" />
								) : null}
								{githubUrl ? <ProjectLink href={githubUrl} label="github" /> : null}
							</div>
						) : null}
					</div>
				</div>
			) : null}
		</article>
	);
}

export function ProjectList() {
	return (
		<div className="w-full">
			<h1 className="mb-7 text-2xl font-semibold tracking-tighter text-neutral-800 dark:text-[#64b7b9]">Projects</h1>
			<div>
				<Project
					title="Cloud Portfolio"
					summary="A static Next.js portfolio deployed to AWS S3 and served through CloudFront."
					description={
						<>
							<p>
								This portfolio is built with Next.js and exported as static
								assets for an AWS-hosted frontend. It uses S3 for object storage,
								CloudFront for delivery, Route 53 for DNS, and GitHub Actions for
								CI/CD.
							</p>
							<p>
								The project is also a practical place for me to keep improving
								my infrastructure, automation, and frontend workflow.
							</p>
						</>
					}
					websiteUrl="https://joshcodes.me"
					githubUrl="https://github.com/joshzee/cloud-portfolio"
				/>

				{/* Copy this block for each new project.
				Use imageSrc/imageAlt to show the same image on the homepage and modal.
				Use cardImageSrc/modalImageSrc only when you want separate images.
				<Project
					title="Project Name"
					summary="Short description for the homepage project list."
					description={
						<>
							<p>Longer description shown inside the modal.</p>
							<p>Add what you built, what you learned, and the stack you used.</p>
						</>
					}
					imageSrc="/project-image.png"
					imageAlt="Project screenshot"
					cardImageSrc="/project-card-image.png"
					cardImageAlt="Project homepage preview"
					modalImageSrc="/project-modal-image.png"
					modalImageAlt="Project modal preview"
					websiteUrl="https://example.com"
					githubUrl="https://github.com/username/repo"
				/>
				*/}
			</div>
		</div>
	);
}
