export default function AddMemoButton({
  onAddMemo,
}: {
  onAddMemo: () => void;
}) {
  return (
    <div
      style={{
        width: 20,
        height: 20,
        fontSize: 20,
        backgroundColor: "#FFB94A",
        color: "white",
        padding: 5,
        textAlign: "center",
        borderRadius: 100,
        marginTop: 10,
      }}
      onClick={onAddMemo}
    >
      +
    </div>
  );
}
