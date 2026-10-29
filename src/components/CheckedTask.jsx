import { useState } from "react";

export default function CheckedTask() {
  // toggle checked on and off
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <CheckBox
        checked={checked}
        onChange={setChecked}
        borderColor="border-green-500"
        buttonText="text-green-500"
      />
    </div>
  );
}

function CheckBox({
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
