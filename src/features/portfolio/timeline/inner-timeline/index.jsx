import { useState, useEffect } from "react";
import * as d3 from "d3";
import TypingTextSVG from "../../../../components/TypingTextSVG";

const EVENTS = [
    {
        label: "Join Company",
        y: 100,
        description:
            "• Started as a Junior Frontend Developer.\n• Introduced to team and workflow.",
    },
    {
        label: "Complete Onboarding",
        y: 100,
        description:
            "• Completed initial training program.\n• Learned company tools and processes.",
    },
    {
        label: "First Project",
        y: 100,
        description:
            "• Worked on a small module for the product.\n• Demonstrated frontend skills effectively.",
    },
    {
        label: "Promotion to Full-time",
        y: 100,
        description:
            "• Promoted to full-time after successful probation.\n• Recognized for consistent performance.",
    },
    {
        label: "Full Stack Developer",
        y: 100,
        description:
            "• Learned backend technologies (Node.js, Express).\n• Contributed to both frontend and backend.",
    },
    {
        label: "Lead Backend Developer",
        y: 100,
        description:
            "• Promoted to Lead Backend Developer.\n• Overseeing backend architecture and mentoring juniors.",
    },
];

export default function InnerTimeline({ width = 1400, height = 240 }) {
    const xScale = d3
        .scaleLinear()
        .domain([0, EVENTS.length - 1])
        .range([300, width - 300]);

    const [visibleNodes, setVisibleNodes] = useState(
        Array(EVENTS.length).fill(false)
    );
    const [activeDescription, setActiveDescription] = useState(null); // Description đang hiển thị
    const [mode, setMode] = useState("auto"); // Chế độ hiển thị: 'auto' hoặc 'manual'

    useEffect(() => {
        if (mode === "auto") {
            EVENTS.forEach((_, index) => {
                setTimeout(() => {
                    setVisibleNodes((prev) => {
                        const updated = [...prev];
                        updated[index] = true;
                        return updated;
                    });

                    setActiveDescription(index); // Hiển thị description tự động
                }, index * 5000);
            });
        } else {
            // Manual mode: hiển thị tất cả các node ngay lập tức
            setVisibleNodes(Array(EVENTS.length).fill(true));
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
            <svg width={width} height={height} className="timeline">
                {/* Đường nối */}
                {EVENTS.slice(0, -1).map((_, i) => (
                    <line
                        key={i}
                        x1={xScale(i)}
                        y1={EVENTS[i].y}
                        x2={xScale(i + 1)}
                        y2={EVENTS[i + 1].y}
                        className="stroke-[#8B5DFF] dark:stroke-[#FEDB39]"
                        strokeWidth="2"
                        style={{
                            opacity: visibleNodes[i] ? 1 : 0,
                            transition: "opacity 0.5s ease",
                        }}
                    />
                ))}

                {/* Các node */}
                {EVENTS.map((event, i) => (
                    <circle
                        key={i}
                        cx={xScale(i)}
                        cy={event.y}
                        r="8"
                        className="fill-[#8B5DFF] dark:fill-[#FEDB39] cursor-pointer"
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
                {EVENTS.map((event, i) => (
                    <text
                        key={i}
                        x={xScale(i)}
                        y={event.y - 15}
                        textAnchor="start"
                        className="text-sm fill-blue-500 dark:fill-yellow-300"
                        style={{
                            opacity: visibleNodes[i] ? 1 : 0,
                            transition: "opacity 0.5s ease",
                        }}
                    >
                        {event.label}
                    </text>
                ))}

                {/* Box và nội dung description */}
                {activeDescription !== null && (() => {
                    const event = EVENTS[activeDescription];
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
                                x={xScale(activeDescription) - width / 2 + 10}
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
