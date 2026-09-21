import Link from "next/link";

export function TagList({ tags }: { tags: string[] }) {
	if (!tags.length) {
		return null;
	}

	return (
		<ul className="tag-list" aria-label="Post tags">
			{tags.map((tag) => (
				<li key={tag}>
					<Link
						className="tag-chip"
						href={`/blog/tags/${encodeURIComponent(tag)}`}
					>
						<span aria-hidden="true">#</span>
						{tag}
					</Link>
				</li>
			))}
		</ul>
	);
}
