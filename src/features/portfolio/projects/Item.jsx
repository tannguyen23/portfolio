import clsx from "clsx";

export default function Item({ data, style, className }) {
    const { id, name, description } = data || {};

    return (
        <div className="w-[36rem] h-[12rem] relative" style={style}>
            {/* Card with Neon Effect */}
            <div
                key={id}
                className={clsx(
                    "blur-sm",
                    "w-[36rem] h-[12rem] bg-[#6c63ff] bg-opacity-35 border-[#6c63ff] border-opacity-50 border-1 backdrop-blur-md shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#6c63ff,0_0_15px_#6c63ff,0_0_30px_#6c63ff] rounded-2xl absolute top-0 flex justify-center items-center  transition ease-in-out duration-500 transform visible overflow-scroll",
                    className
                )}
            >
                <div className="flex flex-col p-3 py-8">
                    <h2 className="text-white text-md">{name}</h2>
                    
                </div>
            </div>

            {/* Reflection with more height and adjusted position */}
            <div
                className="w-[36rem] h-[180px] rounded-t-2xl absolute -bottom-[180px] bg-gradient-to-b from-[#6c63ff] to-transparent
                opacity-30 backdrop-blur-md
                shadow-[0_0_2px rgba(255,255,255,1), 0_0_10px rgba(108,99,255,0.5)] 
                transform scale-y-100"
            ></div>
        </div>
    );
}
