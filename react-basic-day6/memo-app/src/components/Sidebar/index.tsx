import "./style/index.css";
import type { MemoData } from "../../types";
import AddMemoButton from "./AddMemoButon";
import SideBarItem from "./SidebarItem";
import { useState, type SetStateAction } from "react";
import ToggleSidebarButton from "./ToggleSidebarButton";

export default function SideBar({
  memos,
  onAddMemo,
  onDeleteMemo,
  selectedMemoIndex,
  setSelectedMemoIndex,
}: {
  memos: MemoData[];
  onAddMemo: () => void;
  onDeleteMemo: (idx: number) => void;
  selectedMemoIndex: number;
  setSelectedMemoIndex: React.Dispatch<SetStateAction<number>>;
}) {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  return (
    <div className={"sidebar-container" + (sidebarToggle ? " show" : "")}>
      {sidebarToggle ? (
        <>
          <div className="sidebar-header">
            <h2>Side</h2>
            <ToggleSidebarButton
              onSidebarToggle={() => {
                setSidebarToggle(!sidebarToggle);
              }}
            />
          </div>

          {memos.map((item, idx) => {
            return (
              <SideBarItem
                key={idx}
                memo={item}
                onDeleteMemo={(e) => {
                  onDeleteMemo(idx);
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onClickMemoItem={() => {
                  setSelectedMemoIndex(idx);
                }}
                isSelected={idx === selectedMemoIndex}
              />
            );
          })}
          <AddMemoButton onAddMemo={onAddMemo} />
        </>
      ) : (
        <ToggleSidebarButton
          onSidebarToggle={() => {
            setSidebarToggle(!sidebarToggle);
          }}
        />
      )}
    </div>
  );
}
