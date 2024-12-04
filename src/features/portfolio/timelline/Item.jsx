export default function Item({ title, timeDesc, desc, imgSrc }) {
    console.log({ title, timeDesc, desc, imgSrc });
    return (
        <div className="mb-8 pl-4 min-h-24">
            <div className="relative ">
                <div className="absolute -left-[26px] mt-1 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="absolute -left-44 -top-1/2 w-24 h-24 flex items-center justify-center ">
                    <img src={imgSrc} alt={"name"} className="min-w-20" />
                </div>
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-slate-300">
                        {timeDesc}
                    </span>
                </div>
                <p className="mt-2 text-gray-600 dark:text-slate-300">{desc}</p>
            </div>
        </div>
    );
}
