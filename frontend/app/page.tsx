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
			I am a hands-on <b>Senior Application Support Engineer</b> actively transitioning into a <b>DevOps/SRE</b> career path. 
			Currently, I combine my enterprise-scale support experience at <b>LivePerson</b> with practical, hands-on engineering through KubeCraft’s real-world internship program.
			</p>

			<p className="mb-4">
			In my daily operations at LivePerson, I deep-dive into complex technical challenges to troubleshoot and resolve high-priority platform issues. My core responsibilities include leveraging our extensive library of APIs, analyzing conversational bots, and recreating code-level bugs. 
			I rely on a robust observability and diagnostic toolkit daily, utilizing <b>Elastic</b> and <b>Google Cloud</b> for log analysis, <b>Grafana</b> for monitoring, and <b>Postman</b> for API testing. 
			I also run network diagnostics using <b>Chrome DevTools &amp; Proxyman</b>, while managing enterprise incident workflows and configuration deployments through <b>proprietary internal automation consoles</b>, serverless FaaS platforms, and <b>enterprise CRM platforms</b>
			</p>

			<p className="mb-4">
			Driven by a passion for automation, I dedicate my off-hours to building out my homelab, where I gain practical experience with <b>Linux, Docker, Kubernetes, GitLab/GitHub CI/CD, Terraform,</b> and <b>Infrastructure as Code (IaC)</b> best practices. 
			I am actively working toward my <b>AWS Certified Solutions Architect</b> and <b>Certified Kubernetes Administrator (CKA)</b> credentials while developing a public portfolio of projects under the guidance of senior mentors.
			</p>

			<p className="mb-4">
			Outside of work, my curiosity keeps me exploring. You can usually find me experimenting with new configurations in my homelab, diving into exercise physiology, 
			keeping fit, reading comics, or hanging out with my beautiful partner and old man dog. I bring a strong foundation in enterprise operations, a proven hunger for continuous learning, 
			and a growth-focused mindset, and I am actively seeking opportunities to contribute to and scale with a collaborative DevOps or SRE team.
			</p>

			<div className="my-8">
				<ProjectList />
			</div>
			<ParticlesBackrgound />
		</section>
	);
}
