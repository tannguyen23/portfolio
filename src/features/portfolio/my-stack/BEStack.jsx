import { STACKS_BE } from "./util/constant";
import { StackIcons } from "./StackIcons";

export default function BEStack({ style }) {
    return (
        <div
            // className="absolute bottom-0 md:relative transform transition-transform duration-1000 translate-x-full md:translate-x-0 ml-32 md:ml-0
            //     flex flex-col-reverse md:flex-row gap-16"
            className="absolute bottom-0 flex flex-col md:flex-row gap-16 md:relative transform transition-transform duration-1000"
            style={style}
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
