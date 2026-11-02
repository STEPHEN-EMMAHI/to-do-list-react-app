export default function DeleteButton({
  onClick,
  iconColorClass = "text-white",
  hoverColorClass = "hover:text-red-500",
  backgroundColorClass = "bg-red-500",
  borderRadiusClass = "",
  iconSizeClass = "text-[20px]",
  paddingClass = "p-1",
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label="Delete task"
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
        <path d="M3 6h18" />
        <path d="M8 6V4h8v2" />
        <path d="M19 6l-1 14H6L5 6" />
        <path d="M10 11v5" />
        <path d="M14 11v5" />
      </svg>
    </button>
  );
}
