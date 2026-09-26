import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";
import { TagList } from "app/components/tags";

type BlogPostsProps = {
	tag?: string;
	limit?: number;
};

export function BlogPosts({ tag, limit }: BlogPostsProps = {}) {
	let allBlogs = getBlogPosts()
		.filter((post) => !tag || post.metadata.tags.includes(tag))
		.sort((a, b) => {
			return (
				new Date(b.metadata.publishedAt).getTime() -
				new Date(a.metadata.publishedAt).getTime()
			);
		});

	if (limit !== undefined) {
		allBlogs = allBlogs.slice(0, limit);
	}

	return (
		<div className="space-y-10">
			{allBlogs.map((post) => (
				<article key={post.slug}>
					<Link
						className="group flex flex-col space-y-1"
						href={`/blog/${post.slug}`}
					>
						<div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
							<p className="text-neutral-600 dark:text-neutral-100 w-[157px] tabular-nums">
								{formatDate(post.metadata.publishedAt, false)}
							</p>
							<h2 className="text-neutral-900 dark:text-[#64b7b9] tracking-tight text-lg transition-colors group-hover:text-[#397d7f] dark:group-hover:text-[#8bd0d2]">
								{post.metadata.title}
							</h2>
						</div>
						<p className="w-full flex sm:justify-items-start align-middle text-neutral-600 dark:text-neutral-300 tracking-tight">
							{post.metadata.summary}
						</p>
					</Link>
					<div className="mt-3">
						<TagList tags={post.metadata.tags} />
					</div>
				</article>
			))}
		</div>
	);
}

export function LatestBlogPosts() {
	return (
		<section className="mt-12" aria-labelledby="latest-posts-heading">
			<div className="mb-8 flex items-baseline justify-between gap-4">
				<h2
					id="latest-posts-heading"
					className="text-2xl font-semibold tracking-tighter text-[#64b7b9]"
				>
					Latest posts
				</h2>
				<Link
					href="/blog"
					className="text-sm text-neutral-600 transition-colors hover:text-[#397d7f] dark:text-neutral-300 dark:hover:text-[#8bd0d2]"
				>
					All posts →
				</Link>
			</div>
			<BlogPosts limit={3} />
		</section>
	);
}
