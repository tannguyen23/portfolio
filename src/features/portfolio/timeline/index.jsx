import { useState } from "react";
import InnerTimeline from "./inner-timeline";
import Item from "./Item";

const TIMELINE = [
    {
        name: "Graduate FPT University",
        from: 2018,
        to: 2022,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcJg73zDlbRqqjKvW05TZoFqVXBf4RBH-X0A&s",
        desc: "Successfully completed a Bachelor's degree in Software Engineering at FPT University. During this time, I honed my skills in programming, algorithms, and project management. I also participated in several hackathons and team projects, gaining valuable practical experience.",
    },
    {
        name: "Work at Vina Takeuchi",
        from: 2023,
        to: 2024,
        src: "https://lh3.googleusercontent.com/p/AF1QipPs16Pb_oIpWpGYiB5MdRKW5SyIurixAUc5KhJP=s680-w680-h510",
        desc: "Joined Vina Takeuchi as a Frontend Developer, where I worked on developing dynamic and user-friendly web interfaces. My role involved collaborating closely with designers and backend teams to create seamless user experiences while maintaining high code quality.",
    },
];

export default function Timeline() {
    const handleRippleEffect = (event) => {
        const details = event.currentTarget;

        // Tạo ripple
        const ripple = document.createElement("span");
        const diameter = Math.max(details.clientWidth, details.clientHeight);
        const radius = diameter / 2;

        ripple.style.width = ripple.style.height = `${diameter}px`;
        ripple.style.left = `${event.clientX - details.offsetLeft - radius}px`;
        ripple.style.top = `${event.clientY - details.offsetTop - radius}px`;
        ripple.classList.add("ripple");

        // Xóa ripple trước đó (nếu có)
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
            <div className="relative border-l-4 border-blue-500">
                {TIMELINE.map((item, idx) => {
                    return (
                        <div
                            className="relative bg-blue-50 hover:bg-blue-100 dark:hover:bg-blue-700 
                            hover:shadow-lg cursor-pointer my-2 bg-opacity-70
                            transition duration-300 pr-8 overflow-hidden z-40
                            rounded-e-lg
                            "
                            onClick={(event) => {
                                handleRippleEffect(event);
                                handleToggleExpand(idx);
                            }}
                            key={idx}
                        >
                            <details
                                open={idx === idxExpand}
                                className=" relative 
                                      dark:bg-gray-800"
                                onClick={(event) => event.preventDefault()}
                            >
                                <summary className="select-none list-none">
                                    <div className="flex justify-between">
                                        <Item
                                            timeDesc={
                                                item.from + " - " + item.to
                                            }
                                            title={item.name}
                                            desc={item.desc}
                                            imgSrc={item.src}
                                        />
                                    </div>
                                </summary>
                                <div className=" bg-opacity-80">
                                    <InnerTimeline height={240} />
                                </div>
                            </details>
                            <div
                                className="absolute right-0
                                rounded-e-lg min-w-8
                                top-0 bg-blue-300 bg-opacity-40 
                                h-full 
                                flex items-center justify-center"
                            >
                                {idx === idxExpand ? (
                                    <span className="icon-[si--expand-less-alt-duotone] w-4 h-4"></span>
                                ) : (
                                    <span className="icon-[si--expand-more-alt-duotone] w-4 h-4"></span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
