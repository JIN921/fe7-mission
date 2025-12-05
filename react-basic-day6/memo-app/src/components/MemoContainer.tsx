import type { MemoData } from "../types";
import "./memoCotainer.css";

export default function MemoContainer({
  memo,
  onMemoChange,
}: {
  memo: MemoData;
  onMemoChange: (memo: MemoData) => void;
}) {
  if (!memo) {
    return <div className="memo-container">현재 메모가 없습니다.</div>;
  }
  return (
    <div className="memo-container">
      <input
        type="text"
        value={memo.title}
        onChange={(e) => {
          onMemoChange({
            ...memo,
            title: e.target.value,
            updateAt: new Date().getTime(),
          });
        }}
        placeholder="제목을 입력하세요."
      />
      <textarea
        value={memo.content}
        onChange={(e) => {
          onMemoChange({
            ...memo,
            content: e.target.value,
            updateAt: new Date().getTime(),
          });
        }}
        placeholder="내용을 입력하세요."
      />
    </div>
  );
}
