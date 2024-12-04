import { useEffect, useState } from "react";

export default function ToggleButton() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <div
            className="container w-32 h-10 bg-gray-500 dark:bg-white rounded-2xl shadow-xl
          flex items-center transition-all duration-500
          relative"
        >
            <span className="icon-[iconamoon--mode-light] text-2xl text-white mx-4 absolute right-0"></span>
            <span className="icon-[material-symbols--dark-mode] text-2xl text-gray-500 mx-4 absolute"></span>
            <div
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`w-12 h-8 bg-white dark:bg-gray-500 rounded-full transform transition-transform duration-500 cursor-pointer mx-2 ${
                    isDarkMode ? "translate-x-16 " : "translate-x-0"
                }`}
            ></div>
        </div>
    );
}
