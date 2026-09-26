import { LatestBlogPosts } from "app/components/posts";
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
			I’m a Senior Application Support Engineer at LivePerson, transitioning into DevOps/SRE. I troubleshoot high-priority platform issues across APIs and Conversational/Generative AI through custom bot solutions, using Elastic, Google Cloud, Grafana, Postman and Proxyman to trace failures, reproduce defects and support enterprise incidents.
			</p>

			<p className="mb-4">
			Alongside my role, I’m participating in KubeCraft’s hands-on DevOps internship program, completing mentored labs and portfolio projects across Linux, Docker, Kubernetes, Flux and GitOps, CI/CD, Terraform and Infrastructure as Code. I’m also preparing for the GCP Assosciate Cloud Engineer and Certified Kubernetes Administrator certifications. I aim to post about things I'm building, what breaks and how I work through it.
			</p>

			<p className="mb-4">
			Away from terminals, I’m usually training, catching up on comics or spending time with my partner and elderly dog. I’m looking for a collaborative DevOps or SRE team where I can contribute strong operational judgement while continuing to grow as an engineer.
			</p>

			<LatestBlogPosts />
			
			<ParticlesBackrgound />
		</section>
	);
}
