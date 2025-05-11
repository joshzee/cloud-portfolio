import { BlogPosts } from "app/components/posts";
import ParticlesBackrgound from "app/components/ParticlesBackrgound";

export const metadata = {
	title: "Blog",
	description:
		"Articles of my own Cloud Journey, interesting news, projects and more.",
};

export default function Page() {
	return (
		<section>
			<ParticlesBackrgound />

			<h1 className="font-semibold text-2xl mb-8 tracking-tighter">Blog</h1>
			<BlogPosts />
		</section>
	);
}
