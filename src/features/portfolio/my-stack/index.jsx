import Button from "../../../components/Button";
import GlowingText from "../../../components/GlowingText";
import { STACKS_BE, STACKS_FE } from "./constant";

// Tách component StackIcons để tái sử dụng và giữ logic hiển thị danh sách công nghệ
const StackIcons = ({ list }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-8">
        {list.map((item, idx) => (
            <div
                key={idx}
                className="flex flex-col gap-2 items-center justify-center"
            >
                <img src={item.src || "/default-icon.png"} className="w-24" />
                <p className="text-2xl">{item.name || "Unnamed"}</p>
            </div>
        ))}
    </div>
);

export default function MyStackContainer() {
    const handleBackSlide = () => {
        console.log("Navigate Back");
    };

    const handleNextSlide = () => {
        console.log("Navigate Next");
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
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="hidden md:flex flex-col items-center justify-center ml:none md:ml-96 gap-4">
                        <h2 className="text-4xl dark:text-white text-blue-600">
                            FE
                        </h2>
                        <img
                            src="./web-page-browser-analysis-screen-svgrepo-com.svg"
                            alt="frontend_img"
                            className="w-24 h-24 hidden md:block"
                        />
                    </div>
                    <div
                        className="border-[#6c63ff] border-opacity-50 border-1 
                                      min-w-96 min-h-64 border-solid 
                                      rouned-none md:rounded-lg p-8 
                                      backdrop-blur-md
                                      shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#6c63ff,0_0_15px_#6c63ff,0_0_30px_#6c63ff]"
                    >
                        <div className="text dark:text-white">
                            <StackIcons list={STACKS_FE} />
                        </div>
                    </div>
                </div>

                {/* Phần hiển thị Backend */}
                <div
                    className="absolute bottom-0 md:relative transform transition-transform duration-1000 translate-x-full md:translate-x-0 ml-32 md:ml-0
                                  flex flex-col-reverse md:flex-row gap-16"
                >
                    <div
                        className="border-[#6c63ff] border-opacity-50 border-1 
                                      min-w-96 min-h-64 border-solid 
                                      rouned-none md:rounded-lg p-8
                                      backdrop-blur-md
                                      shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#6c63ff,0_0_15px_#6c63ff,0_0_30px_#6c63ff]"
                    >
                        <div className="text dark:text-white">
                            <StackIcons list={STACKS_BE} />
                        </div>
                    </div>
                    <div className="hidden md:flex flex-row justify-center items-center mr:0 md:mr-48 gap-4">
                        <h2 className="text-4xl dark:text-white text-blue-600">
                            BE
                        </h2>
                        <img
                            src="/server-network-part-2-svgrepo-com.svg"
                            alt="backend_img"
                            className="w-24 h-24 hidden md:block"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
