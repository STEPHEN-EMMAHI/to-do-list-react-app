export default function Checkbox({
  checked = false,
  onChange,
  checkedBorderColor = "border-zinc-900",
  checkmarkColor = "text-zinc-900",
}) {
  return (
    <div>
      {/* Tell the parent to switch the checked value when this button is clicked. */}
      <button
        type="button"
        onClick={() => onChange(!checked)}
        aria-label={checked ? "Mark task incomplete" : "Mark task complete"}
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
          checked ? checkedBorderColor : "border-zinc-900"
        }`}
      >
        {checked ? (
          <span className={`font-bold text-sm ${checkmarkColor}`}>✓</span>
        ) : null}
      </button>
    </div>
  );
}
