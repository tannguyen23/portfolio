import TypingText from "../../../components/TypingText";
import ContactMe from "./ContactMe";

export default function Me() {
    return (
        <div className="p-1 flex flex-row gap-8">
            <img src="/undraw_teaching_58yg.svg" className="w-3/4 hidden md:block"></img>
            <div className="flex flex-row gap-2">
                <div className="flex flex-col gap-4">
                    <p className="font-sans font-bold text-6xl dark:text-white">
                        About me
                    </p>
                    <p className="font-sans font-bold text-4xl dark:text-[#6c63ff]">
                        Nguyen Ngoc Tan
                    </p>
                    <TypingText
                        text="Fullstack Developer"
                        speed={100}
                        className="my-4"
                        textClassName="font-sans text-lg font-bold text-blue-600 dark:text-blue-300"
                    />
                    <p className="font-sans text-lg font-thin text-gray-500 dark:text-white">
                        I&apos;m Tan Nguyen, a fullstack developer dedicated to
                        turning ideas into impactful digital solutions. From
                        front-end development that captivates users to back-end
                        systems that ensure reliability, I bring a holistic
                        approach to software development.
                    </p>
                    <p className="font-sans text-lg font-thin text-gray-500 dark:text-white">
                        I am passionate about learning new technologies and
                        continuously improving my skills to create innovative
                        solutions. My ultimate goal is to contribute to
                        meaningful projects that not only solve problems but
                        also positively impact people&apos;s lives. I aspire to
                        collaborate with forward-thinking teams where I can grow
                        as a developer and make a lasting difference.
                    </p>
                    <ContactMe className={"my-2"} />
                </div>
            </div>
        </div>
    );
}
