import "./style/sideBarItem.css";
import type { MemoData } from "../../types";
import DeleteButton from "./DeleteButton";

export default function SideBarItem({
  memo,
  isSelected,
  onDeleteMemo,
  onClickMemoItem,
}: {
  memo: MemoData;
  isSelected: boolean;
  onDeleteMemo: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClickMemoItem: () => void;
}) {
  return (
    <div
      className={"item-container" + (isSelected ? " selected" : "")}
      onClick={onClickMemoItem}
    >
      {memo.title} <DeleteButton onDeleteMemo={onDeleteMemo} />
    </div>
  );
}
