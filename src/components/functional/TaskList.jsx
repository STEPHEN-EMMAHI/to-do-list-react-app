import { useState } from "react";
import DeleteButton from "../reusable/Delete";
import EditButton from "../reusable/Edit";
import TaskCompletionToggle from "./TaskCompletionToggle";

export default function TaskList({ listId, tasks, onAddTask }) {
  // Holds the current text in the task input.
  const [taskInput, setTaskInput] = useState("");

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
      {/* Render one task row per task; the ID helps React track each row. */}
      {tasks.map((task) => (
        <TaskItem key={task.id} taskText={task.text} />
      ))}
    </>
  );
}

function TaskItem({ taskText }) {
  return (
    <div className="flex gap-4 m-4 items-center p-4 border-b lg:hover:bg-zinc-300">
      <TaskCompletionToggle />
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
        />
      </div>
    </div>
  );
}
