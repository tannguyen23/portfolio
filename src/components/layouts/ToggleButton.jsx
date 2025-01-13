export default function ToggleButton({ isDarkMode, onSetIsDarkMode }) {
    return (
        <div
            className="container w-32 h-10 bg-gray-500 dark:bg-white rounded-2xl shadow-xl
          flex items-center transition-all duration-500
          relative"
        >
            {/* Biểu tượng Light Mode */}
            <span className="icon-[iconamoon--mode-light] text-2xl text-white mx-4 absolute right-0"></span>
            {/* Biểu tượng Dark Mode */}
            <span className="icon-[material-symbols--dark-mode] text-2xl text-gray-500 mx-4 absolute"></span>
            <div
                onClick={() => onSetIsDarkMode(!isDarkMode)}
                className={`flex justify-center items-center w-12 h-8 bg-white dark:bg-gray-500 
                          hover:bg-slate-200 dark:hover:bg-gray-400 shadow-md shadow-slate-500 dark:shadow-slate-50
                          rounded-full transform transition-transform duration-500 cursor-pointer mx-2 ${
                              isDarkMode ? "translate-x-16 " : "translate-x-0"
                          }`}
            ></div>
        </div>
    );
}
