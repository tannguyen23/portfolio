import Avatar from "../../components/Avatar";


export default function Me() {
    return (
        <div className="p-1 flex flex-row gap-8">
            <Avatar
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqXH8yOvJEwNnzghe_4y6u0y6uzmRSOZYK_A&s"
                size="20"
            />
            <div className="flex flex-col gap-4">
                <p className="font-sans font-bold text-4xl">Nguyen Ngoc Tan</p>
                <p className="font-sans text-lg font-bold text-blue-600 dark:text-blue-300">
                    Fullstack Developer
                </p>
                <p className="font-sans text-lg font-thin text-gray-500 dark:text-white">
                    I&apos;m fullstack developer .....
                </p>
            </div>
        </div>
    );
}
