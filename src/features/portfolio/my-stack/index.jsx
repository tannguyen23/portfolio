import { useState } from "react";
import Button from "../../../components/Button";
import GlowingText from "../../../components/GlowingText";
import BEStack from "./BEStack";
import FEStack from "./FEStack";

export default function MyStackContainer() {
    const handleBackSlide = () => {
      setActiveSlide(0)
    };

    const handleNextSlide = () => {
      setActiveSlide(1)
    };

    const [activeSlide, setActiveSlide] = useState(0);

    const getStyles = (activeSlide, index) => {
        if (activeSlide === index)
            return {
                transform: "translateX(0px) ",
            };
        else if (activeSlide - 1=== index)
            return {
                transform: "translateX(-510px) ",
            };
        else if (activeSlide + 1 === index)
            return {
                transform: "translateX(510px)",
            };
    };

    return (
        <div className="flex items-center md:items-start justify-center md:mx-48 h-full">
            <div className="relative md:flex flex-col gap-8">
                {/* Phần tiêu đề và nút điều hướng */}
                <div className="flex justify-center items-center gap-8">
                    <Button
                        onClick={() => {
                            handleBackSlide();
                        }}
                        className="!rounded-full w-16 h-16 !bg-[#6c63ff] !bg-opacity-30 
                                      hover:!bg-opacity-100 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#6c63ff,0_0_15px_#6c63ff,0_0_30px_#6c63ff]"
                    >
                        <span className="icon-[mdi--navigate-before] w-16 h-16 text-white " />
                    </Button>
                    <GlowingText
                        text="My Stack"
                        gradientColors="from-[#857eff] via-[#a69bff] to-[#c3baff] my-8 md:my-0"
                    />
                    <Button
                        onClick={() => {
                            handleNextSlide();
                        }}
                        className="!rounded-full w-16 h-16 !bg-[#6c63ff] !bg-opacity-30 
                                      hover:!bg-opacity-100 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#6c63ff,0_0_15px_#6c63ff,0_0_30px_#6c63ff]"
                    >
                        <span className="icon-[mdi--navigate-next] w-16 h-16 text-white " />
                    </Button>
                </div>

                {/* Phần hiển thị Frontend */}
                <FEStack style={getStyles(activeSlide, 0)} />

                {/* Phần hiển thị Backend */}
                <BEStack style={getStyles(activeSlide, 1)} />
            </div>
        </div>
    );
}
