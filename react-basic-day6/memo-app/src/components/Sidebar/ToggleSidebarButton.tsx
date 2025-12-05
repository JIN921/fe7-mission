export default function ToggleSidebarButton({
  onSidebarToggle,
}: {
  onSidebarToggle: () => void;
}) {
  return (
    <button
      style={{
        border: "none",
        backgroundColor: "transparent",
        fontSize: "larger",
        fontWeight: "bold",
        color: "gray",
      }}
      onClick={onSidebarToggle}
    >
      &lt;&lt;
    </button>
  );
}
