import { useState } from "react";

export default function ToggleButton({ isDarkMode, onSetIsDarkMode }) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  return (
    <div
      className="container w-32 h-10 rounded-2xl shadow-xl
          flex items-center transition-all duration-500
          bg-gray-500 dark:bg-white 
          relative"
    >
      {/* Biểu tượng Light Mode */}
      <span
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => onSetIsDarkMode(false)}
        className={`icon-[iconamoon--mode-light] text-2xl mx-4 absolute left-2
          ${isDarkMode ? "text-gray-300" : "text-yellow-500"}
          hover:text-yellow-300 cursor-pointer`}
      ></span>

      {/* Biểu tượng Dark Mode */}
      <span
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => onSetIsDarkMode(true)}
        className={`icon-[material-symbols--dark-mode] text-2xl mx-4 absolute right-2 text-white
          ${isDarkMode ? "text-gray-800" : "text-gray-500"}
          hover:text-yellow-300 cursor-pointer`}
      ></span>

      {/* Nút chuyển đổi */}
      <div
        className={`flex justify-center items-center h-8 bg-white dark:bg-gray-500 
                shadow-md shadow-slate-500 dark:shadow-slate-50
                rounded-full cursor-pointer mx-2 
                transform transition-all duration-500
                ${
                  isHover && isDarkMode
                    ? "scale-x-[1.2] origin-right" // Mở rộng về trái khi hover
                    : isHover
                    ? "scale-x-[1.2] origin-left" // Mở rộng về phải khi hover
                    : "scale-x-100 origin-center" // Trạng thái mặc định
                }
                ${isDarkMode ? "translate-x-[4rem]" : "translate-x-0"}`}
        style={{ width: "3rem" }} // Đặt chiều rộng cơ bản (48px)
      />
    </div>
  );
}
