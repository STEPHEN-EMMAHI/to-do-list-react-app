import { useState } from "react";
import Heading from "./components/functional/Heading";
import Lists from "./components/functional/Lists";

function App() {
  // state added lists title state array
  const [allListTitles, setAllListTitles] = useState([]);

  // state to track the currently selected list title
  const [selectedListID, setSelectedListID] = useState(null);

  // function to add new list-title to the list
  function addListTitle(newList) {
    setAllListTitles((currentList) => [...currentList, newList]);
  }

  return (
    <div className="font-sans">
      <Heading />
      <Lists
        onaddListTitle={addListTitle}
        allListTitles={allListTitles}
        selectedListID={selectedListID}
        onsetSelectedListID={setSelectedListID}
      />
    </div>
  );
}

export default App;
