export default function CheckBox({
  checked = false,
  onChange,
  borderColor = "border-zinc-900",
  buttonText = "text-zinc-900",
}) {
  // checks whether the checkbox is checked or not

  return (
    <div>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        aria-label="toggle task completion"
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${checked ? `${borderColor}` : "border-zinc-900"}`}
      >
        {checked ? (
          <span className={`font-bold text-sm ${buttonText}`}>✓</span>
        ) : null}
      </button>
    </div>
  );
}
