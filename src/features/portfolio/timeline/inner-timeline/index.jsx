import { useState, useEffect } from "react";
import * as d3 from "d3";
import TypingTextSVG from "../../../../components/TypingTextSVG";

export default function InnerTimeline({ events, width = 1600, height = 240 }) {
    const xScale = d3
        .scaleLinear()
        .domain([0, events.length - 1])
        .range([100, width - 100]);

    const [visibleNodes, setVisibleNodes] = useState(
        Array(events.length).fill(false)
    );
    const [activeDescription, setActiveDescription] = useState(null); // Description đang hiển thị
    const [mode, setMode] = useState("auto"); // Chế độ hiển thị: 'auto' hoặc 'manual'

    useEffect(() => {
        if (mode === "auto") {
            // Hiển thị các node và description tự động
            events.forEach((_, index) => {
                setTimeout(() => {
                    setVisibleNodes((prev) => {
                        const updated = [...prev];
                        updated[index] = true;
                        return updated;
                    });

                    setActiveDescription(index); // Hiển thị description tự động
                }, index * 5000); // Mỗi node xuất hiện cách nhau 5000ms
            });

            // Sau khi tất cả node hiển thị, chuyển sang manual mode
            setTimeout(() => {
                setMode("manual");
                setActiveDescription(null); // Reset description
            }, events.length * 5000); // Tổng thời gian để hiển thị toàn bộ node
        } else {
            // Manual mode: hiển thị tất cả các node ngay lập tức
            setVisibleNodes(Array(events.length).fill(true));
        }
    }, [mode]);

    const calculateRectDimensions = (text, lineHeight = 24, padding = 6) => {
        const lines = text.split("\n");
        const width = 300 + padding * 2;
        const height = lines.length * lineHeight + padding * 2;
        return { width, height };
    };

    return (
        <div className="flex flex-col">
            <svg
                width={width}
                height={height}
                className="timeline overflow-visible"
            >
                {/* Đường nối */}
                {events.slice(0, -1).map((_, i) => (
                    <line
                        key={i}
                        x1={xScale(i)}
                        y1={events[i].y}
                        x2={xScale(i + 1)}
                        y2={events[i + 1].y}
                        className="stroke-[#8B5DFF] dark:stroke-[#6c63ff]"
                        strokeWidth="2"
                        style={{
                            opacity: visibleNodes[i] ? 1 : 0,
                            transition: "opacity 0.5s ease",
                        }}
                    />
                ))}

                {/* Các node */}
                {events.map((event, i) => (
                    <circle
                        key={i}
                        cx={xScale(i)}
                        cy={event.y}
                        r={8}
                        className="fill-[#8B5DFF] dark:fill-[#6c63ff] dark:hover:fill-[#8680ff] cursor-pointer"
                        onMouseEnter={() => {
                            if (mode === "manual") {
                                setActiveDescription(i); // Chỉ đổi khi hover vào node khác
                            }
                        }}
                        style={{
                            opacity: visibleNodes[i] ? 1 : 0,
                            transition: "opacity 0.5s ease",
                        }}
                    />
                ))}

                {/* Nhãn (labels) */}
                {events.map((event, i) => (
                    <text
                        key={i}
                        x={xScale(i) - 50}
                        y={event.y - 35}
                        textAnchor="start"
                        className="text-sm fill-blue-500 dark:fill-yellow-300"
                        style={{
                            opacity: visibleNodes[i] ? 1 : 0,
                            transition: "opacity 0.5s ease",
                        }}
                    >
                        {event.label.split("\n").map((line, index) => (
                            <tspan
                                x={xScale(i) - 50}
                                dy={index === 0 ? 0 : "1.2em"}
                                key={index}
                            >
                                {line}
                            </tspan>
                        ))}
                    </text>
                ))}

                {/* Box và nội dung description */}
                {activeDescription !== null &&
                    (() => {
                        const event = events[activeDescription];
                        const { width, height } = calculateRectDimensions(
                            event.description,
                            24
                        );

                        return (
                            <g key={`desc-${activeDescription}`}>
                                <rect
                                    x={xScale(activeDescription) - width / 2}
                                    y={event.y + 20}
                                    width={width}
                                    height={height + 16}
                                    rx="10"
                                    ry="10"
                                    className="fill-slate-300"
                                    style={{
                                        opacity: 0.6,
                                        transition:
                                            "opacity 0.2s ease, transform 0.2s ease",
                                    }}
                                />

                                <TypingTextSVG
                                    x={
                                        xScale(activeDescription) -
                                        width / 2 +
                                        10
                                    }
                                    y={event.y + 40}
                                    text={event.description}
                                    speed={40}
                                    textAnchor="start"
                                    textLineAnchor="start"
                                    lineHeight={24}
                                    style={{
                                        opacity: 1,
                                        transition: "opacity 0.2s ease",
                                    }}
                                />
                            </g>
                        );
                    })()}
            </svg>
        </div>
    );
}
