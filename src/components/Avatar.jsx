export default function Avatar({ name, src, size = "16" }) {
    return (
        <div className={`flex items-center space-x-4 `}>
            {/* Avatar Image */}
            <div
                className={`w-${size} h-${size} border-gray-200 dark:border-gray-500 border-2 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center`}
            >
                {src ? (
                    <img
                        src={src}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <span className="text-xl font-medium text-gray-500 dark:text-gray-400">
                        {name?.charAt(0).toUpperCase()}
                    </span>
                )}
            </div>

            {/* Optional Name */}
            {name && (
                <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    {name}
                </span>
            )}
        </div>
    );
}
