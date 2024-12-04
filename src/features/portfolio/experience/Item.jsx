export default function Item({ name, from, to, src }) {
    return (
        <div className="flex flex-row gap-8">
            <img
                src={src}
                alt={name}
                className="w-24 h-24 object-cover rounded-full"
            />
            <div className="flex flex-col justify-around">
                <p className="text-2xl font-semibold text-gray-800 dark:text-white">
                    {name}
                </p>
                <div className="flex flex-row gap-2">
                    <p className="text-lg font-thin text-gray-800 dark:text-white">
                        {from}
                    </p>
                    <p className="text-lg font-thin text-gray-800 dark:text-white">
                        {"-"}
                    </p>
                    <p className="text-lg font-thin text-gray-800 dark:text-white">
                        {to}
                    </p>
                </div>
            </div>
        </div>
    );
}
