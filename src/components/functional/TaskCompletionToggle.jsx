import { useState } from "react";
import Checkbox from "../reusable/Checkbox";

export default function TaskCompletionToggle() {
  // Tracks whether this task is complete or still needs to be done.
  const [isComplete, setIsComplete] = useState(false);

  return (
    <Checkbox
      checked={isComplete}
      onChange={setIsComplete}
      checkedBorderColor="border-green-500"
      checkmarkColor="text-green-500"
    />
  );
}
