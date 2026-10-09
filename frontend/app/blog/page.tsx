import { BlogPosts } from "app/components/posts";
import ParticlesBackrgound from "app/components/ParticlesBackrgound";
import type { Metadata } from "next";
import { baseUrl } from "app/sitemap";

const title = "Blog";
const description =
	"Articles of my own DevOps & Cloud Journey, interesting news, projects and more.";
const ogImage = new URL("/og/default.png", baseUrl).toString();

export const metadata: Metadata = {
	title,
	description,
	openGraph: {
		title,
		description,
		url: `${baseUrl}/blog`,
		type: "website",
		images: [
			{
				url: ogImage,
				width: 1200,
				height: 627,
				alt: "Joshua Zarazovski blog",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
		images: [ogImage],
	},
};

export default function Page() {
	return (
		<section>
			<ParticlesBackrgound />

			<h1 className="font-semibold text-2xl mb-8 tracking-tighter text-[#64b7b9]">Blog</h1>
			<BlogPosts />
		</section>
	);
}
