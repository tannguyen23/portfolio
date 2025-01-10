import { useState, useEffect } from "react";

export default function TypingTextSVG({
    x,
    y,
    text,
    speed = 100,
    className = "",
    lineHeight = 16,
    textLineAnchor = "start",
    ...props
}) {
    const [displayedText, setDisplayedText] = useState(""); // Text hiển thị

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

    // Tách các dòng dựa trên ký tự '\n'
    const lines = displayedText.split("\n");

    return (
        <text
            x={x}
            y={y}
            className={`text-xs fill-gray-800 ${className}`}
            {...props}
        >
            {lines.map((line, index) => (
                <tspan
                    key={index}
                    x={x}
                    dy={index === 0 ? 0 : lineHeight}
                    textAnchor={textLineAnchor}
                >
                    {line}
                </tspan>
            ))}

            {/* Con trỏ nhấp nháy sau ký tự cuối cùng của dòng cuối */}
            {/* {displayedText.length < text.length && (
                <tspan
                    x={
                        x +
                        (textLineAnchor === "start" ? displayedText.length * 6 : 0) // Điều chỉnh vị trí x theo chiều dài ký tự
                    }
                    dy={(lines.length - 1) * lineHeight} // Điều chỉnh vị trí y theo số dòng
                    className="animate-blink"
                >
                    |
                </tspan>
            )} */}
        </text>
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
