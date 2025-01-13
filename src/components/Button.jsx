import clsx from "clsx";

export default function Button({
    children,
    onClick,
    type = "button",
    variant = "primary",
    size = "md",
    className = "",
}) {
    // Define base styles
    const baseStyles =
        "inline-flex items-center justify-center font-medium rounded focus:outline-none focus:ring transition";

    // Define variants
    const variants = {
        primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300",
        secondary:
            "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300",
        danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-300",
    };

    // Define sizes
    const sizes = {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    // Combine classes
    const classes = clsx(baseStyles, variants[variant], sizes[size], className);

    return (
        <button type={type} onClick={onClick} className={classes}>
            {children}
        </button>
    );
}
