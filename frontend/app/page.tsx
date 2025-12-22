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
				I’m a hands-on Technical Support Engineer transitioning toward DevOps, combining enterprise support experience at Fastly with active learning 
				through KubeCraft’s real-world internship program. I troubleshoot complex networking and API issues daily using tools like Wireshark, Google Cloud, 
				and proprietary network management platforms, while building skills across Linux, Docker/Kubernetes, GitLab/GitHub CI/CD, Terraform, monitoring, and IaC best practices.
				<br/><br/>
				I’m working toward certifications including AWS Solutions Architect and CKA, and developing a public portfolio through guided projects and mentoring from 
				senior engineers. Outside of work, I stay curious—experimenting in my homelab, learning new tech, keeping fit, exploring exercise physiology, reading comics, and 
				spending time with my dog. I bring operational experience, learning hunger, and a fresh, growth-focused mindset, and I’m actively pursuing opportunities to 
				contribute and grow in DevOps/SRE platforms.`
			</p>
			<div className="my-8">
				<ProjectList />
			</div>
			<ParticlesBackrgound />
		</section>
	);
}
