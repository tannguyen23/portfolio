import { STACKS_BE } from "./util/constant";
import { StackIcons } from "./StackIcons";
import clsx from "clsx";

export default function BEStack({ cn }) {
    return (
        <div
            className={clsx(
                "absolute bottom-0 flex flex-col md:flex-row gap-16 md:relative transform transition-transform duration-1000",
                cn,
                "md:!translate-x-0"
            )}
        >
            <div
                className="border-[#6c63ff] border-opacity-50 border-1 
                    min-w-[30rem] min-h-64 border-solid 
                    rouned-none md:rounded-lg p-8
                    backdrop-blur-md
                    shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#6c63ff,0_0_15px_#6c63ff,0_0_30px_#6c63ff]"
            >
                <div className="text dark:text-white">
                    <StackIcons list={STACKS_BE} />
                </div>
            </div>
            <div className="hidden md:flex flex-row justify-center items-center mr:0 md:mr-48 gap-4">
                <h2 className="text-4xl dark:text-white text-blue-600">BE</h2>
                <img
                    src="/server-network-part-2-svgrepo-com.svg"
                    alt="backend_img"
                    className="w-24 h-24 hidden md:block"
                />
            </div>
        </div>
    );
}
