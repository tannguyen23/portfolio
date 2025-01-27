export const StackIcons = ({ list }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-8">
      {list.map((item, idx) => (
          <div
              key={idx}
              className="flex flex-col gap-2 items-center justify-center"
          >
              <img src={item.src || "/default-icon.png"} className="w-24" />
              <p className="text-2xl">{item.name || "Unnamed"}</p>
          </div>
      ))}
  </div>
);