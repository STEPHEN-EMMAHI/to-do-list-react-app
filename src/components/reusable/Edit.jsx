export default function EditButton({
  onClick,
  iconColorClass = "text-white",
  hoverColorClass = "hover:text-blue-500",
  backgroundColorClass = "bg-blue-500",
  borderRadiusClass = "",
  iconSizeClass = "text-[20px]",
  paddingClass = "p-1",
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label="Edit task"
      className={`${iconColorClass} ${backgroundColorClass} ${borderRadiusClass} ${paddingClass} ${iconSizeClass} lg:${hoverColorClass} lg:cursor-pointer`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L10 16l-4 1 1-4Z" />
        <path d="M3 7v14h14" />
      </svg>
    </button>
  );
}
