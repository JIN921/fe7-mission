import { useCallback, useState } from "react";
import "./App.css";
import MemoContainer from "./components/MemoContainer";
import SideBar from "./components/Sidebar";
import type { MemoData } from "./types";
import { localStorageGetItem, localStorageSetItem } from "./lib/storage";

function App() {
  const [memos, setMemos] = useState(localStorageGetItem("memos"));
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const handleMemoChange = useCallback(
    (newMemo: MemoData) => {
      setMemos((prev: MemoData[]) => {
        const new_array = [...prev];
        new_array[selectedMemoIndex] = newMemo;
        localStorageSetItem("memos", new_array);
        return new_array;
      });
    },
    [selectedMemoIndex]
  );

  const handleAddMemo = useCallback(() => {
    const now = new Date().getTime();

    const new_memo = [
      ...memos,
      {
        title: "Untitled",
        content: "",
        createAt: now,
        updateAt: now,
      },
    ];

    setMemos(new_memo);
    setSelectedMemoIndex(memos.length);
    localStorageSetItem("memos", new_memo);
  }, [memos]);

  const handleDeleteMemo = useCallback(
    (deletedIndex: number) => {
      const deleted_array = memos.filter(
        (_item: MemoData, idx: number) => idx !== deletedIndex
      );
      setMemos(deleted_array);
      localStorageSetItem("memos", deleted_array);

      setSelectedMemoIndex(memos.length - 2);
    },
    [memos]
  );
  return (
    <div className="App">
      <SideBar
        memos={memos}
        onAddMemo={handleAddMemo}
        onDeleteMemo={handleDeleteMemo}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
      />
      <MemoContainer
        memo={memos[selectedMemoIndex]}
        onMemoChange={handleMemoChange}
      />
    </div>
  );
}

export default App;
