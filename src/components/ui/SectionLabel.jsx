/**
 * Numbered section label with a gold decorative line.
 * e.g. "01 — About"
 * @param {{ text: string }} props
 */
export default function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span
        className="text-xs font-mono tracking-[0.2em] uppercase"
        style={{ color: "#d4a853" }}
      >
        {text}
      </span>
      <div
        className="h-px flex-1"
        style={{ background: "linear-gradient(to right, #d4a85344, transparent)" }}
      />
    </div>
  );
}
