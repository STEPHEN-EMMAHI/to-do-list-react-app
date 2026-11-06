import { useState } from "react";
import Checkbox from "../reusable/Checkbox";

export default function CompletedTask({
  listId,
  tasks,
  onToggleTaskComplete,
}) {
  const [showCompletedTask, setShowCompletedTask] = useState(false);
  return (
    <>
      <button
        className="flex justify-between items-center p-4 bg-gray-200 w-full"
        onClick={() => setShowCompletedTask((show) => !show)}
      >
        <span>Completed ({tasks.length})</span>
        <span>
          {showCompletedTask ? (
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
              <path d="m18 15-6-6-6 6" />
            </svg>
          ) : (
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
              <path d="m6 9 6 6 6-6" />
            </svg>
          )}
        </span>
      </button>

      {
        /* populate the completed tasks here */ <div
          className={`grid transition-all duration-500 ease-in-out ${showCompletedTask ? `grid-rows-[1fr] opacity-100` : `grid-rows-[0fr] opacity-0`}`}
        >
          <div className="overflow-hidden">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center gap-4 border-b p-4"
              >
                <Checkbox
                  checked={true}
                  onChange={(nextChecked) =>
                    onToggleTaskComplete(listId, task.id, nextChecked)
                  }
                  checkedBorderColor="border-green-500"
                  checkmarkColor="text-green-500"
                />
                <p>{task.text}</p>
              </div>
            ))}
          </div>
        </div>
      }
    </>
  );
}
