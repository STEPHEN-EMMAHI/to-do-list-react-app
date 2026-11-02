import { useState } from "react";
import HandleBackwards from "./Back";

export default function Lists({
  lists,
  selectedListId,
  onAddList,
  onSelectList,
}) {
  // Controls whether the list tabs or the new-list form is displayed.
  const [isAddingList, setIsAddingList] = useState(false);

  if (isAddingList) {
    return (
      <AddListTitle
        onAddList={onAddList}
        onCancel={() => setIsAddingList(false)}
      />
    );
  }

  function handleStartAddingList() {
    setIsAddingList(true);
    // Clear the selection while the user is creating a different list.
    onSelectList(null);
  }

  return (
    <div className="flex items-center mx-2 mt-8 gap-3 border-b-2">
      <div className="flex min-w-0 flex-1 items-center gap-6 overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden">
        {lists.map((list) => (
          <ListTab
            key={list.id}
            isSelected={selectedListId === list.id}
            onSelect={() => onSelectList(list.id)}
          >
            {list.title}
          </ListTab>
        ))}
      </div>

      <button
        type="button"
        className="shrink-0 whitespace-nowrap lg:cursor-pointer"
        onClick={handleStartAddingList}
      >
        + New List
      </button>
    </div>
  );
}

function AddListTitle({ onAddList, onCancel }) {
  // Holds the text entered for the new list's title.
  const [listTitle, setListTitle] = useState("");

  function handleSubmitList(event) {
    event.preventDefault();

    // Trim whitespace and require a title before creating the list.
    const trimmedTitle = listTitle.trim();
    if (!trimmedTitle) return;

    const newList = {
      id: crypto.randomUUID(),
      title: trimmedTitle,
    };
    onAddList(newList);
    onCancel();
  }

  return (
    <form className="mt-4 mx-4" onSubmit={handleSubmitList}>
      <HandleBackwards onCancel={onCancel}>&lt; Back</HandleBackwards>

      <h2 className="mb-2">Create a new list</h2>
      <div className="flex gap-4 items-center">
        <input
          className="w-full h-12 p-2 border"
          type="text"
          name="list"
          id="list"
          placeholder="Enter list title"
          value={listTitle}
          onChange={(event) => setListTitle(event.target.value)}
        />
        <button className="border p-2.5 lg:cursor-pointer" type="submit">
          Done
        </button>
      </div>
    </form>
  );
}

function ListTab({ children, isSelected, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`shrink-0 whitespace-nowrap border-b-3 lg:cursor-pointer lg:hover:border-b-blue-500 ${
        isSelected ? "border-b-blue-500" : "border-b-transparent"
      }`}
    >
      {children}
    </button>
  );
}
