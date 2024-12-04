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
    return (
        <div className="container mx-auto p-6">
            <div className="relative border-l-4 border-blue-500">
                {TIMELINE.map((item, idx) => {
                    return (
                        <details
                            key={idx}
                            // className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
                            open={false}
                            
                        >
                            <summary className="select-none list-none">
                                <Item
                                    timeDesc={item.from + " - " + item.to}
                                    title={item.name}
                                    desc={item.desc}
                                    imgSrc={item.src}
                                />
                            </summary>
                            <div className="">1</div>
                        </details>
                    );
                })}
            </div>
        </div>
    );
}
