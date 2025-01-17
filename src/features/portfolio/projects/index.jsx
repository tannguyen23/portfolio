import { useState } from "react";
import GlowingText from "../../../components/GlowingText";
import Item from "./Item";

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
            <div className="flex flex-row w-full" style={{perspective : "1000px"}}>
                {PROJECTS.map((item, idx) => {
                    return <Item key={idx} style={getStyles(idx)} />;
                })}
            </div>
        </div>
    );
}
