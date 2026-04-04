/**
 * Small pill badge for tech stack items and project types.
 * @param {{ label: string, color: string }} props
 */
export default function Tag({ label, color }) {
  return (
    <span
      className="text-xs font-mono px-2 py-0.5 rounded-sm border"
      style={{ color, borderColor: `${color}44`, background: `${color}11` }}
    >
      {label}
    </span>
  );
}
