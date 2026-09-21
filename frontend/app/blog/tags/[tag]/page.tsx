import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogPosts } from "app/components/posts";
import ParticlesBackrgound from "app/components/ParticlesBackrgound";
import { getBlogTags } from "app/blog/utils";

export async function generateStaticParams() {
	return getBlogTags().map((tag) => ({ tag }));
}

export function generateMetadata({ params }: { params: { tag: string } }) {
	if (!getBlogTags().includes(params.tag)) {
		return {};
	}

	return {
		title: `Posts tagged “${params.tag}”`,
		description: `Blog posts tagged ${params.tag}.`,
	};
}

export default function TagPage({ params }: { params: { tag: string } }) {
	if (!getBlogTags().includes(params.tag)) {
		notFound();
	}

	return (
		<section>
			<ParticlesBackrgound />
			<Link
				href="/blog"
				className="inline-block mb-4 text-sm text-neutral-600 dark:text-neutral-300 transition-colors hover:text-[#397d7f] dark:hover:text-[#8bd0d2]"
			>
				← All posts
			</Link>
			<h1 className="font-semibold text-2xl mb-8 tracking-tighter text-[#64b7b9]">
				Posts tagged “{params.tag}”
			</h1>
			<BlogPosts tag={params.tag} />
		</section>
	);
}
