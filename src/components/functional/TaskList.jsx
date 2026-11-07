import { useEffect, useRef, useState } from "react";
import DeleteButton from "../reusable/Delete";
import EditButton from "../reusable/Edit";
import Checkbox from "../reusable/Checkbox";

export default function TaskList({
  listId,
  tasks,
  onAddTask,
  onClearAllTaskBylist,
  deleteTask,
  deleteSelectedList,
  onToggleTaskComplete,
}) {
  // Holds the current text in the task input.
  const [taskInput, setTaskInput] = useState("");

  // state to control the opend and close of the tasks options
  const [isOpenTaskOptions, setIsOpenTaskOptions] = useState(false);

  function handleSubmitTask(event) {
    // Keep the browser from reloading the page when the form is submitted.
    event.preventDefault();

    // Ignore blank input, including text that contains only spaces.
    const taskText = taskInput.trim();
    if (!taskText) return;

    const newTask = {
      id: crypto.randomUUID(),
      text: taskText,
    };

    // Build on the previous array so existing tasks are not replaced.
    onAddTask(listId, newTask);
    setTaskInput("");
  }

  // clearing the clear all task button when we click anywhere outside its space
  const taskOptionsRef = useRef(null);
  useEffect(() => {
    // if options is not open, then do nothing
    if (!isOpenTaskOptions) return;

    function handleClickOutside(event) {
      if (!taskOptionsRef.current?.contains(event.target)) {
        setIsOpenTaskOptions(false);
      }
    }
    document.addEventListener("pointerdown", handleClickOutside);
    return () =>
      document.removeEventListener("pointerdown", handleClickOutside);
  }, [isOpenTaskOptions]);

  return (
    <>
      <form
        className="flex gap-4 m-2 mt-4 items-center"
        onSubmit={handleSubmitTask}
      >
        <input
          type="text"
          name="task"
          id="task"
          value={taskInput}
          placeholder="Enter a task"
          className="w-full h-8 border p-2"
          onChange={(event) => setTaskInput(event.target.value)}
        />
        <button type="submit" className="border px-1 py-0.5 lg:cursor-pointer">
          Add
        </button>
      </form>

      {/* more options for the tasks */}
      <div
        ref={taskOptionsRef}
        className="flex flex-col items-end justify-end m-4"
      >
        <button
          onClick={() => setIsOpenTaskOptions((open) => !open)}
          className="py-2 px-0.5 lg:cursor-pointer"
        >
          <svg
            className="w-full"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <circle cx="12" cy="5" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="12" cy="19" r="1.5" />
          </svg>
        </button>
        {isOpenTaskOptions && (
          <div className="mt-2 rounded-md shadow-md flex flex-col gap-0.5">
            <button
              className="lg:hover:bg-red-600 lg:hover:text-white p-2 lg:cursor-pointer max-lg:transition-transform max-lg:duration-100 max-lg:active:scale-95 max-lg:active:translate-y-px max-lg:active:shadow-inner"
              onClick={() => onClearAllTaskBylist(listId)}
            >
              Clear All Tasks
            </button>

            {/* clear list button */}
            <button
              className="p-2 lg:hover:bg-red-600 lg:hover:text-white lg:cursor-pointer max-lg:transition-transform max-lg:duration-100 max-lg:active:scale-95 max-lg:active:translate-y-px max-lg:active:shadow-inner"
              onClick={() => deleteSelectedList(listId)}
            >
              Delete List
            </button>
          </div>
        )}
      </div>

      {/* Render one task row per task; the ID helps React track each row. */}
      {tasks
        .filter((task) => !task.completed)
        .map((task) => (
          <TaskItem
            key={task.id}
            taskText={task.text}
            listId={listId}
            taskId={task.id}
            deleteTask={deleteTask}
            checked={task.completed ?? false}
            onToggleTaskComplete={onToggleTaskComplete}
          />
        ))}
    </>
  );
}

function TaskItem({
  taskText,
  listId,
  deleteTask,
  taskId,
  checked,
  onToggleTaskComplete,
}) {
  return (
    <div className="flex gap-4 m-4 items-center p-4 border-b lg:hover:bg-zinc-300">
      <Checkbox
        checked={checked}
        onChange={(nextChecked) =>
          onToggleTaskComplete(listId, taskId, nextChecked)
        }
        checkedBorderColor="border-green-500"
        checkmarkColor="text-green-500"
      />
      <p>{taskText}</p>

      <div className="ml-auto flex gap-4 mr-4 items-center">
        <EditButton
          iconColorClass="text-white"
          hoverColorClass="hover:text-blue-500"
          backgroundColorClass="bg-blue-500"
          borderRadiusClass="rounded-sm"
          iconSizeClass="text-[22px]"
          paddingClass="p-1"
        />
        <DeleteButton
          iconColorClass="text-white"
          hoverColorClass="hover:text-red-500"
          backgroundColorClass="bg-red-500"
          borderRadiusClass="rounded-sm"
          iconSizeClass="text-[22px]"
          paddingClass="p-1"
          onClick={() => deleteTask(listId, taskId)}
        />
      </div>
    </div>
  );
}
