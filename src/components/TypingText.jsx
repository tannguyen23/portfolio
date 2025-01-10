import { useState, useEffect } from "react";

export default function TypingText({ text = "", speed = 100, className = "" }) {
    const [displayedText, setDisplayedText] = useState(""); // Text hiện tại

    useEffect(() => {
        if (!text) {
            setDisplayedText(""); // Reset nếu text trống
            return;
        }

        let index = 0; // Biến theo dõi vị trí ký tự hiện tại
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText(text.slice(0, index + 1)); // Lấy chuỗi từ đầu đến index
                index++;
            } else {
                clearInterval(interval); // Dừng interval khi hoàn tất typing
            }
        }, speed);

        return () => clearInterval(interval); // Cleanup interval khi text hoặc component thay đổi
    }, [text, speed]);

    return (
        <div className={`flex items-center ${className}`}>
            <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                {displayedText}
                {displayedText.length < text.length && (
                    <span className="animate-blink">|</span>
                )}
            </span>
        </div>
    );
}

// CSS để tạo hiệu ứng con trỏ nhấp nháy
const styles = `
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.animate-blink {
  animation: blink 1s step-start infinite;
}
`;

// Inject styles vào head
if (typeof document !== "undefined") {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}
