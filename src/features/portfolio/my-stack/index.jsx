import GlowingText from "../../../components/GlowingText";

const STACKS_FE = [
    {
        name: "ReactJS",
        src: "/reactjs-svgrepo-com.svg",
    },
    {
        name: "Javascript",
        src: "/javascript-svgrepo-com.svg",
    },
    {
        name: "Material UI",
        src: "/material-ui-svgrepo-com.svg",
    },
    {
        name: "TailwindCSS",
        src: "/tailwindcss-icon-svgrepo-com.svg",
    },
    {
        name: "Redux",
        src: "/redux-svgrepo-com.svg",
    },
    {
        name: "HTML5",
        src: "/html-5-svgrepo-com.svg",
    },
    {
        name: "CSS3",
        src: "/css-3-svgrepo-com.svg",
    },
    {
        name: "ReactJS",
        src: "/reactjs-svgrepo-com.svg",
    },
];

const STACKS_BE = [
    {
        name: "PHP",
        src: "/php-svgrepo-com.svg",
    },
    {
        name: "Laravel",
        src: "/laravel-svgrepo-com.svg",
    },
    {
        name: "NodeJS",
        src: "/nodejs-svgrepo-com.svg",
    },
    {
        name: "NestJS",
        src: "/nestjs-svgrepo-com.svg",
    },
    {
        name: "Docker",
        src: "/docker-svgrepo-com.svg",
    },
    {
        name: "Ubuntu",
        src: "/ubuntu-svgrepo-com.svg",
    },
    {
        name: "Nginx",
        src: "/nginx-svgrepo-com.svg",
    },
    {
        name: "PostgreSQL",
        src: "/postgresql-svgrepo-com.svg",
    },
];

export default function MyStackContainer() {
    const renderStackIcons = (list) => {
        return (
            <div className="grid grid-cols-4 gap-8">
                {list.map((item, idx) => {
                    return (
                        <div
                            key={idx}
                            className="flex flex-col gap-2 items-center justify-center"
                        >
                            <img src={item.src} className="w-24" />
                            <p className="text-2xl">{item.name}</p>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="flex h-full items-center justify-center md:mx-48">
            <div className="flex flex-col gap-8 ">
                <GlowingText
                    text="My Stack"
                    gradientColors="from-[#857eff] via-[#a69bff] to-[#c3baff]"
                />

                <div className="flex flex-col gap-8">
                    <div className="flex flex-row gap-16">
                        <div className="flex flex-col items-center justify-center ml-96 gap-4">
                            <h2 className="text-4xl dark:text-white text-blue-600 ">
                                FE
                            </h2>
                            <img
                                src="./web-page-browser-analysis-screen-svgrepo-com.svg"
                                alt="frontend_img"
                                className="w-24 h-24"
                            />
                        </div>
                        <div
                            className="border-[#6c63ff] border-opacity-50 border-1 
                                      min-w-96 min-h-64 border-solid 
                                      rounded-lg p-8 
                                      backdrop-blur-md
                                      shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#6c63ff,0_0_15px_#6c63ff,0_0_30px_#6c63ff]
                                      "
                        >
                            <div className="text dark:text-white">
                                {renderStackIcons(STACKS_FE)}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-16">
                        <div
                            className="border-[#6c63ff] border-opacity-50 border-1 
                                      min-w-96 min-h-64 border-solid 
                                      rounded-lg p-8 shadow-2xl
                                      backdrop-blur-md
                                      shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#6c63ff,0_0_15px_#6c63ff,0_0_30px_#6c63ff]
                                      "
                        >
                            <div className="text dark:text-white">
                                {renderStackIcons(STACKS_BE)}
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center mr-48 gap-4">
                            <h2 className="text-4xl dark:text-white text-blue-600 ">
                                BE
                            </h2>
                            <img
                                src="/server-network-part-2-svgrepo-com.svg"
                                alt="backend_img"
                                className="w-24 h-24"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
