export default function Divider({ direction = "horizontal" }) {
    const isVertical = direction === "vertical";
    return (
        <div
            className={`bg-gray-500 dark:bg-white ${
                isVertical ? "w-[1px] min-h-full" : "min-w-full h-[1px]"
            }`}
        />
    );
}
