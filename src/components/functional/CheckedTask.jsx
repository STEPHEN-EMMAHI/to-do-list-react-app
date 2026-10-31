import { useState } from "react";
import CheckBox from "../reusable/CheckBox";

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
