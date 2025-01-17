import { useState } from "react";
import GlowingText from "../../../components/GlowingText";
import Item from "./Item";
import Button from "../../../components/Button";

export const PROJECTS = [
    {
        id: 1,
        name: "A",
    },
    {
        id: 2,
        name: "B",
    },
    {
        id: 3,
        name: "C",
    },
    // {
    //     id: 4,
    //     name: "D",
    // },
];

export default function Projects() {
    const [activeSlide, setActiveSlide] = useState(1);

    const getStyles = (index) => {
        if (activeSlide === index)
            return {
                opacity: 1,
                transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
                zIndex: 10,
            };
        else if (activeSlide - 1 === index)
            return {
                opacity: 1,
                transform:
                    "translateX(100px) translateZ(-100px) rotateY(25deg)",
                zIndex: 9,
            };
        else if (activeSlide + 1 === index)
            return {
                opacity: 1,
                transform:
                    "translateX(-100px) translateZ(-100px) rotateY(-25deg)",
                zIndex: 9,
            };
        else if (activeSlide - 2 === index)
            return {
                opacity: 1,
                transform:
                    "translateX(-480px) translateZ(-500px) rotateY(35deg)",
                zIndex: 8,
            };
        else if (activeSlide + 2 === index)
            return {
                opacity: 1,
                transform:
                    "translateX(480px) translateZ(-500px) rotateY(-35deg)",
                zIndex: 8,
            };
        else if (index < activeSlide - 2)
            return {
                opacity: 0,
                transform:
                    "translateX(-480px) translateZ(-500px) rotateY(35deg)",
                zIndex: 7,
            };
        else if (index > activeSlide + 2)
            return {
                opacity: 0,
                transform:
                    "translateX(480px) translateZ(-500px) rotateY(-35deg)",
                zIndex: 7,
            };
    };

    return (
        <div className="flex flex-col h-full justify-start items-end md:mx-48">
            <GlowingText
                text="Joined projects"
                gradientColors="from-[#857eff] via-[#a69bff] to-[#c3baff]"
            />
            <div className="flex flex-col w-full h-full mr-[200px]">
                <div className="flex flex-row justify-start my-8 ml-[400px] gap-4">
                <Button className="!rounded-full w-16 h-16 !bg-[#6c63ff] !bg-opacity-30 
                        hover:!bg-opacity-100 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#6c63ff,0_0_15px_#6c63ff,0_0_30px_#6c63ff]">
                        <span className="icon-[mdi--navigate-before] w-16 h-16 text-white " />
                    </Button>
                    <Button className="!rounded-full w-16 h-16 !bg-[#6c63ff] !bg-opacity-30 
                        hover:!bg-opacity-100 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#6c63ff,0_0_15px_#6c63ff,0_0_30px_#6c63ff]">
                        <span className="icon-[mdi--navigate-next] w-16 h-16 text-white " />
                    </Button>
                </div>
                <div
                    className="flex flex-row "
                    style={{ perspective: "1000px" }}
                >
                    {PROJECTS.map((item, idx) => {
                        return <Item key={idx} style={getStyles(idx)} />;
                    })}
                </div>
            </div>
        </div>
    );
}
