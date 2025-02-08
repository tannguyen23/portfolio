import GlowingText from "../../../components/GlowingText";
import MarkdownRenderer from "../../../components/MarkdownRenderer";
import SlideProjects from "./3d-slide";
import { PROJECTS } from "./constant";

export default function Projects() {
	return (
		<div className="flex flex-col justify-start md:mx-48">
			<GlowingText
				text="Joined projects"
				gradientColors="from-[#857eff] via-[#a69bff] to-[#c3baff]"
                className="!text-2xl sm:!text-4xl"
			/>
			<SlideProjects />
			<div className="md:hidden xs:flex flex-col gap-8 px-2">
				{PROJECTS.map((project, idx) => (
					<div
						key={idx}
						className="w-full my-2 bg-white text-gray-900 rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow"
					>
						<MarkdownRenderer>{project.description}</MarkdownRenderer>
					</div>
				))}
			</div>
		</div>
	);
}
