import Avatar from "../../components/Avatar";
import TypingText from "../../components/TypingText";


export default function Me() {
    return (
        <div className="p-1 flex flex-row gap-8">
            <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqXH8yOvJEwNnzghe_4y6u0y6uzmRSOZYK_A&s"
                size="20"
            />
            <div className="flex flex-col gap-4">
                <p className="font-sans font-bold text-4xl dark:text-white">Nguyen Ngoc Tan</p>
                <p className="font-sans text-lg font-bold text-blue-600 dark:text-blue-300">
                    Fullstack Developer
                </p>
                <p className="font-sans text-lg font-thin text-gray-500 dark:text-white">
                    I&apos;m fullstack developer .....
                </p>
                <TypingText
                    text="Hello,  I&apos;m Nguyen Ngoc Tan - Fullstack web developer ....."
                    speed={100}
                    className="my-4"
                />
            </div>
        </div>
    );
}
