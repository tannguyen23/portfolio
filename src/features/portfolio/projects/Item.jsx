import clsx from "clsx";
import { useState } from "react";

export default function Item({ data, style, className, onSelectViewItem }) {
    const { id, name } = data || {};
    const [isHover, setIsHover] = useState(false);

    return (
        <div className="w-[36rem] h-[6rem] relative over" style={style}>
            {/* Card with Neon Effect */}
            <div
                key={id}
                className={clsx(
                    "blur-sm relative",
                    "w-[36rem] h-[6rem] bg-[#6c63ff] bg-opacity-35 border-[#6c63ff]",
                    "border-opacity-50 border-1",
                    "shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#6c63ff,0_0_15px_#6c63ff,0_0_30px_#6c63ff] ",
                    "rounded-2xl absolute top-0 flex justify-center items-center transition ease-in-out duration-500 transform visible overflow-hidden",
                    "hover:scale-110 cursor-pointer",
                    className
                )}
                onMouseEnter={() => {
                    setIsHover(true);
                }}
                onMouseLeave={() => {
                    setIsHover(false);
                }}
                onClick={() => onSelectViewItem()}
            >
                <div className="absolute p-3 py-8">
                    <h2 className="text-white text-xl">{name}</h2>
                </div>
            </div>

            {/* Reflection with more height and adjusted position */}
            <div
                className={clsx(
                    "w-[36rem] h-[6rem] rounded-t-2xl absolute -bottom-[100px] bg-gradient-to-b from-[#6c63ff] to-transparent",
                    "opacity-30 backdrop-blur-md shadow-[0_0_2px rgba(255,255,255,1), 0_0_10px rgba(108,99,255,0.5)] ",
                    "transition ease-in-out duration-500 transform",
                    isHover ? "scale-110 translate-y-3" : ""
                  )}
            ></div>
        </div>
    );
}
