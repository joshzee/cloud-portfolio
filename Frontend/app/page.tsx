import { BlogPosts } from "app/components/posts";
import { ExperienceList } from "app/components/experience";

export default function Page() {
	return (
		<section>
			<h1 className="mb-8 text-2xl font-semibold tracking-tighter">
				Josh Zarazovski
			</h1>
			<p className="mb-4">
				{`I'm a Cloud enthusiast and AI advocate, finding unmatched efficiency in
        AWS' wide range of Developer and Operations services. I started off 12+ years ago in ActionScript/Flash Development (RIP)
        and have worn many hats since then. I now find myself heavily involved in Enterprise and AI Technical Support, currently working mainly with DynamoDB,
        Cloudwatch, S3, API Gateway and Lambda, which combined, is a great serverless approach to solve the chaleneges that the organisation faces tackling
        AI hallucinations, prompt input/output and more. When I'm not at work, I enjoy working on my homelab, slowly building upon the container & orchestrator services and 
        self-hosting as much as I can. I also love learning more about Physiology, Keeping Fit, New Tech, Comics and the latest in Neuroscience.`}
			</p>
			<div className="my-8">
				<ExperienceList />
			</div>
		</section>
	);
}
