import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";
import { TagList } from "app/components/tags";

export function BlogPosts({ tag }: { tag?: string } = {}) {
	let allBlogs = getBlogPosts()
		.filter((post) => !tag || post.metadata.tags.includes(tag))
		.sort((a, b) => {
			if (
				new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
			) {
				return -1;
			}
			return 1;
		});

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
