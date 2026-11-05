import { useEffect, useState } from "react";
import Heading from "./components/functional/Heading";
import Lists from "./components/functional/Lists";
import TaskList from "./components/functional/TaskList";
import { HomePageImg } from "./components/functional/Home";

function App() {
  // Stores every list created by the user.
  const [lists, setLists] = useState(() => {
    const storedValue = localStorage.getItem("lists");

    // if there is no localStorage for the lists, return an array
    if (!storedValue) return [];

    // if there is localStorage, then parse the stored value and return the...
    // ...parsedValue in an array form.
    const parsedValue = JSON.parse(storedValue);
    return Array.isArray(parsedValue) ? parsedValue : [];
  });

  // state to control whether the homepage image should show or not
  const [isHomePageImg, setIsHomePageImg] = useState(true);

  // Stores the selected list's ID; null means no list is currently selected.
  const [selectedList, setSelectedList] = useState(null);

  // store tasks by list ID so each list keeps its own tasks
  // the object holds the tasks group
  const [tasksByList, setTasksByList] = useState(() => {
    const storedValue = localStorage.getItem("tasksByList");
    return storedValue ? JSON.parse(storedValue) : {};
  });

  // function that handles adding a list
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

  // function to delete a task
  function handleDeleteTask(listid, taskid) {
    setTasksByList((currentTasksByList) => ({
      ...currentTasksByList,
      [listid]: (currentTasksByList[listid] ?? []).filter(
        (task) => task.id != taskid,
      ),
    }));
  }

  // function to delete the selected list
  function deleteSelectedList(listid) {
    // calculate the remaining list first, then check whether that array is empty
    const remainingList = lists.filter((list) => list.id !== listid);

    setLists((currentList) => currentList.filter((list) => list.id != listid));

    setTasksByList((currentTaskByList) => {
      const remainingTasks = { ...currentTaskByList };
      delete remainingTasks[listid];
      return remainingTasks;
    });

    setSelectedList(null);

    // if after deleting a list, there are no lists again, then show the homePageImage
    if (remainingList.length === 0) setIsHomePageImg(true);
  }

  // useEffect to store the tasks in local storage
  useEffect(() => {
    localStorage.setItem("tasksByList", JSON.stringify(tasksByList));
  }, [tasksByList]);

  // useEffect to store the lists in local storage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  return (
    <div className="font-sans">
      <Heading />
      <Lists
        lists={lists}
        selectedList={selectedList}
        onAddList={handleAddList}
        onSelectList={setSelectedList}
        tasksByList={tasksByList}
        onsetIsHomePageImg={setIsHomePageImg}
      />
      {isHomePageImg && lists.length === 0 ? <HomePageImg /> : null}
      {selectedList && (
        <TaskList
          listId={selectedList}
          tasks={tasksByList[selectedList] ?? []}
          onAddTask={handleAddTask}
          tasksByList={tasksByList}
          onClearAllTaskBylist={clearAllTasksByList}
          deleteTask={handleDeleteTask}
          deleteSelectedList={deleteSelectedList}
        />
      )}
    </div>
  );
}

export default App;
