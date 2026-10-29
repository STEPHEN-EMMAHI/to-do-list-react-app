export default function Edit({
  onClick,
  color = "text-white",
  hoverColor = "hover:text-blue-500",
  bgColor = "bg-blue-500",
  borderRound,
  size = "text-[20px]",
  padding = "p-1",
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label="edit-task"
      className={`${color} ${bgColor} ${borderRound} ${padding} ${size} lg:${hoverColor} lg:cursor-pointer`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L10 16l-4 1 1-4Z" />
        <path d="M3 7v14h14" />
      </svg>
    </button>
  );
}
