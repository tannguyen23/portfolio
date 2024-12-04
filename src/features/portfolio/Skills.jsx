const SKILLS = [
    {
        id: 1,
        name: "UI/UX Web design",
    },
    {
        id: 2,
        name: "Planing",
    },
];

export default function Skills() {
    const renderItem = (title) => (
        <div className="p-1 shadow-md bg-gray-100 rounded-md">
            <p className="text-lg font-thin">{title}</p>
        </div>
    );

    return (
        <div className="flex flex-col gap-1">
            <p className="font-bold font-lg text-gray-700 dark:text-gray-200">
                Skills
            </p>
            <div className="container flex flex-row gap-2">
                {SKILLS?.map((item) => {
                    return renderItem(item.name);
                })}
            </div>
        </div>
    );
}
