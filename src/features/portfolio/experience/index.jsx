import Item from "./Item";

const EXPERICENCES = [
    {
        name: "Graduate FPT University",
        from: 2018,
        to: 2022,
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcJg73zDlbRqqjKvW05TZoFqVXBf4RBH-X0A&s",
    },
    {
        name: "Work at Vina Takeuchi",
        from: 2023,
        to: 2024,
        src: "https://lh3.googleusercontent.com/p/AF1QipPs16Pb_oIpWpGYiB5MdRKW5SyIurixAUc5KhJP=s680-w680-h510",
    },
];

export default function Experience() {
    const renderItem = ({ name, from, to, src }) => (
        <Item name={name} from={from} to={to} src={src} />
    );

    return (
        <div className="flex flex-col gap-1">
            <p className="font-bold font-lg text-gray-700 dark:text-gray-200">
                Experience
            </p>
            <div className="container flex flex-col gap-3">
                {EXPERICENCES?.map((itemExp) => {
                    return renderItem(itemExp);
                })}
             
            </div>
        </div>
    );
}
