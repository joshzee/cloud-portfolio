import { BlogPosts } from "app/components/posts";
import { ExperienceList } from "app/components/experience";
import { ProjectList } from "app/components/projects";
import ParticlesBackrgound from "app/components/ParticlesBackrgound";
import Image from "next/image";
import ProfilePic from "./images/self.jpg";
export default function Page() {
	return (
		<section>
			<Image
				src={ProfilePic}
				width={120}
				height={120}
				alt="Profile Picture"
				className="profile-img"
			/>
			<h1 className="text-[#64b7b9]  text-2xl font-semibold tracking-tighter home-header align-top justify-center pt-12">
				Joshua Zarazovski
			</h1>
			<p className="mb-4">
				{`I'm a Cloud enthusiast and AI advocate, finding unmatched effectiveness and efficiency in
        AWS' wide range of services for Developers, Operations, QA Testers, Software & Support Engineers and many more. I started off 12+ years ago in ActionScript/Flash Development (RIP)
        and have worn many hats since then. I now find myself heavily involved in Enterprise and AI Technical Support, debugging code and Cloud infrastructure. I'm currently working mainly with DynamoDB,
        Cloudwatch, S3, API Gateway and Lambda, which combined, is a great serverless approach to solve the challenges that the organisation faces tackling
        AI hallucinations, Prompt Generation and more. When I'm not at work, I enjoy jigging around with my Homelab, Exercise Physiology, Keeping Fit, New Tech, Comics and playing with my Dog.`}
			</p>
			<div className="my-8">
				<ExperienceList />
			</div>
			<div className="my-8">
				<ProjectList />
			</div>
			<ParticlesBackrgound />
		</section>
	);
}
