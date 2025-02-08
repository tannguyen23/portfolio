import { useState } from "react";
import InnerTimeline from "./inner-timeline";
import Item from "./Item";

const TIMELINE = [
	{
		name: "Work at Vina Takeuchi",
		from: 2023,
		to: 2024,
		src: "https://lh3.googleusercontent.com/p/AF1QipPs16Pb_oIpWpGYiB5MdRKW5SyIurixAUc5KhJP=s680-w680-h510",
		desc: "Joined Vina Takeuchi as a Frontend Developer, where I worked on developing dynamic and user-friendly web interfaces. My role involved collaborating closely with designers and backend teams to create seamless user experiences while maintaining high code quality.",
		events: [
			{
				label: "Enroll at \n FPT University",
				y: 160,
				description:
					"• Officially became a student of FPT University.\n• Excited to explore the IT field and meet new friends.",
			},
			{
				label: "Complete \n Foundation Program",
				y: 145,
				description:
					"• Gained fundamental knowledge in programming and algorithms.\n• Built a strong foundation in teamwork and communication.",
			},
			{
				label: "First \n Software Project",
				y: 120,
				description:
					"• Worked on a group project to develop a simple website.\n• Learned practical skills in HTML, CSS, and JavaScript.",
			},
			{
				label: "Internship \n Program",
				y: 80,
				description:
					"• Joined a real-world internship program.\n• Applied knowledge to solve industry-related problems.",
			},
			{
				label: "Specialization in \n Full Stack Development",
				y: 60,
				description:
					"• Specialized in full-stack development.\n• Developed projects using React, Node.js, and databases.",
			},
			{
				label: "Graduate with \n Honors",
				y: 0,
				description:
					"• Successfully graduated with a degree in Information Technology.\n• Achieved recognition for academic excellence and project contributions.",
			},
		],
	},
	{
		name: "Graduate FPT University",
		from: 2018,
		to: 2022,
		src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcJg73zDlbRqqjKvW05TZoFqVXBf4RBH-X0A&s",
		desc: "Successfully completed a Bachelor's degree in Software Engineering at FPT University. During this time, I honed my skills in programming, algorithms, and project management. I also participated in several hackathons and team projects, gaining valuable practical experience.",
		events: [
			{
				label: "Join Company",
				y: 140,
				description:
					"• Started as a Junior Frontend Developer.\n• Introduced to team and workflow.",
			},
			{
				label: "Complete \n Onboarding",
				y: 88,
				description:
					"• Completed initial training program.\n• Learned company tools and processes.",
			},
			{
				label: "First Project",
				y: 55,
				description:
					"• Worked on a small module for the product.\n• Demonstrated frontend skills effectively.",
			},
			{
				label: "Promotion to \n Full-time",
				y: 42,
				description:
					"• Promoted to full-time after successful probation.\n• Recognized for consistent performance.",
			},
			{
				label: "Full Stack \n Developer",
				y: 11,
				description:
					"• Learned backend technologies (Node.js, Express).\n• Contributed to both frontend and backend.",
			},
			{
				label: "Lead Backend \n Developer",
				y: 0,
				description:
					"• Promoted to Lead Backend Developer.\n• Overseeing backend architecture and mentoring juniors.",
			},
		],
	},
];

export default function Timeline({
	isExpandedAll = true,
	showExpandButton = false,
}) {
	const handleRippleEffect = (event) => {
		const details = event.currentTarget;

		const ripple = document.createElement("span");
		const diameter = Math.max(details.clientWidth, details.clientHeight);
		const radius = diameter / 2;

		ripple.style.width = ripple.style.height = `${diameter}px`;
		ripple.style.left = `${event.clientX - details.offsetLeft - radius}px`;
		ripple.style.top = `${event.clientY - details.offsetTop - radius}px`;
		ripple.classList.add("ripple");

		const existingRipple = details.getElementsByClassName("ripple")[0];
		if (existingRipple) {
			existingRipple.remove();
		}

		details.appendChild(ripple);
	};

	const [idxExpand, setIdxExpand] = useState(0);

	const handleToggleExpand = (idx) => {
		if (idx !== idxExpand) {
			setIdxExpand(idx);
		} else {
			setIdxExpand(null);
		}
	};

	return (
		<div className="container mx-auto p-6">
			<div className="flex flex-row-reverse gap-8">
				<img
					src="/undraw_process_7lkc.svg"
					className="w-1/4 hidden md:block"
				></img>
				<div className="relative ">
					{TIMELINE.map((item, idx) => {
						return (
							<div className="my-4 relative z-40 rounded-e-lg" key={idx}>
								<Item
									timeDesc={item.from + " - " + item.to}
									title={item.name}
									desc={item.desc}
									imgSrc={item.src}
									showImg={false}
								/>
								<div className="md:block hidden ">
									<InnerTimeline
										height={280}
										width={1200}
										events={item.events}
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
