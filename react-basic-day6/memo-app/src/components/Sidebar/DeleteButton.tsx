export default function DeleteButton({
  onDeleteMemo,
}: {
  onDeleteMemo: (e: React.MouseEvent<HTMLDivElement>) => void;
}) {
  return (
    <div
      style={{
        width: 20,
        fontSize: 15,
        backgroundColor: "#E57373",
        color: "white",
        padding: 5,
        textAlign: "center",
        borderRadius: 5,
      }}
      onClick={onDeleteMemo}
    >
      X
    </div>
  );
}
