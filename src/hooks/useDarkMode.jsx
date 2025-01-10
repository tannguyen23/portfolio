import { useEffect, useState } from "react";

export function useDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Kiểm tra trạng thái dark mode từ localStorage (nếu có)
        return localStorage.getItem("dark-mode") === "true";
    });

    useEffect(() => {
        // Thêm hoặc xóa class "dark" trên <html>
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        // Lưu trạng thái vào localStorage
        localStorage.setItem("dark-mode", isDarkMode.toString());
    }, [isDarkMode]);

    return [isDarkMode, setIsDarkMode];
}
