import { useState } from "react";
import Heading from "./components/functional/Heading";
import Lists from "./components/functional/Lists";
import TaskList from "./components/functional/TaskList";

function App() {
  // Stores every list created by the user.
  const [lists, setLists] = useState([]);

  // Stores the selected list's ID; null means no list is currently selected.
  const [selectedListId, setSelectedListId] = useState(null);

  // store tasks by list ID so each list keeps its own tasks
  // the object holds the tasks group
  const [tasksByList, setTasksByList] = useState({});

  function handleAddList(newList) {
    // Use the previous state so adding a list keeps all existing lists.
    setLists((currentLists) => [...currentLists, newList]);
  }

  // function to add task to the correct list while keeping tasks already saved for every list
  function handleAddTask(listId, newTask) {
    setTasksByList((currentTaskByList) => ({
      ...currentTaskByList,
      [listId]: [...(currentTaskByList[listId] ?? []), newTask],
    }));
  }

  // function to clear all tasks by list
  function clearAllTasksByList(listId) {
    setTasksByList((currentTasksByList) => {
      const listTasks = currentTasksByList[listId] ?? [];

      if (listTasks.length === 0) return currentTasksByList;

      return {
        ...currentTasksByList,
        [listId]: [],
      };
    });
  }

  return (
    <div className="font-sans">
      <Heading />
      <Lists
        lists={lists}
        selectedListId={selectedListId}
        onAddList={handleAddList}
        onSelectList={setSelectedListId}
        tasksByList={tasksByList}
      />
      {selectedListId && (
        <TaskList
          listId={selectedListId}
          tasks={tasksByList[selectedListId] ?? []}
          onAddTask={handleAddTask}
          tasksByList={tasksByList}
          onClearAllTaskBylist={clearAllTasksByList}
        />
      )}
    </div>
  );
}

export default App;
