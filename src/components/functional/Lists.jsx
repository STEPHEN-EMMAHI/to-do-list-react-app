import { useState } from "react";

export default function Lists({
  onaddListTitle,
  allListTitles,
  selectedListID,
  onsetSelectedListID,
}) {
  // state to track list title visibilty on and off
  const [addingListTitle, setAddingListTitle] = useState(false);

  // show addlist component if user is adding a list
  if (addingListTitle) {
    return (
      <AddListTitle
        setAddingListTitle={setAddingListTitle}
        onaddListTitle={onaddListTitle}
      />
    );
  }

  return (
    <div className="flex items-center mx-2 border-b-2 mt-8 gap-6 flex-nowrap overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden">
      {allListTitles.map((list) => (
        <Title
          key={list.id}
          className={`lg:cursor-pointer shrink-0 whitespace-nowrap border-b-3 lg:hover:border-b-blue-500 ${selectedListID === list.id ? "border-b-blue-500" : "border-b-transparent"}`}
          onClick={() => onsetSelectedListID(list.id)}
        >
          {list.title}
        </Title>
      ))}

      <button
        type="button"
        className="shrink-0 whitespace-nowrap lg:cursor-pointer"
        onClick={() => setAddingListTitle(true)}
      >
        + New List
      </button>
    </div>
  );
}

export function AddListTitle({ setAddingListTitle, onaddListTitle }) {
  // state to control adding list title
  const [addListTitle, setAddList] = useState("");

  function handleFormListSubmit(e) {
    e.preventDefault();

    if (!addListTitle) return;

    const newListTitle = {
      id: crypto.randomUUID(),
      title: addListTitle,
    };
    onaddListTitle(newListTitle);

    // after form is submitted, toggle off the addListTitle component
    setAddingListTitle(false);
  }

  // move back if user clicks on back button
  function handleBackwards() {
    setAddingListTitle(false);
  }

  return (
    <form className="mt-4 mx-4" onSubmit={handleFormListSubmit}>
      <button
        className="mb-4 lg:cursor-pointer"
        type="button"
        onClick={handleBackwards}
      >
        &lt; Back
      </button>
      <h2 className="mb-2">Create a new list</h2>
      <div className="flex gap-4 items-center">
        <input
          className="w-full h-12 p-2 border"
          type="text"
          name="list"
          id="list"
          placeholder="Enter list title"
          value={addListTitle}
          onChange={(e) => setAddList(e.target.value)}
        />
        <button className="border p-2.5 lg:cursor-pointer" type="submit">
          Done
        </button>
      </div>
    </form>
  );
}

function Title({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
