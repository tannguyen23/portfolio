import clsx from "clsx";

const GlowingText = ({
  text,
  gradientColors = "from-blue-500 via-teal-500 to-pink-500",
  className = "",
}) => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Glow Effect */}
      <span
        className={clsx(
          "absolute blur-lg bg-gradient-to-r",
          gradientColors,
          "bg-clip-text text-transparent text-6xl font-extrabold"
        )}
        aria-hidden="true"
      >
        {text}
      </span>

      {/* Foreground Text */}
      <span
        className={clsx(
          "relative bg-gradient-to-r",
          gradientColors,
          "bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto",
          className,
          "py-1"
        )}
      >
        {text}
      </span>
    </div>
  );
};

export default GlowingText;
