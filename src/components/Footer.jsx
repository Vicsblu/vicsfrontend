import { FOOTER_LINKS } from "../data";

export default function Footer({ dark }) {
  const bg = dark ? "#060606" : "#f0ebe0";
  const copyColor = dark ? "#ffffff22" : "#00000022";
  const linkColor = dark ? "#ffffff33" : "#00000033";

  return (
    <footer
      style={{
        background: bg,
        borderTop: `1px solid ${dark ? "#ffffff0d" : "#0000000d"}`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xs font-mono" style={{ color: copyColor }}>
          © 2025 Victor Oguntoyinbo — Built with React &amp; Tailwind
        </span>

        <div className="flex gap-5">
          {FOOTER_LINKS.map(({ l, h }) => (
            <a
              key={l}
              href={h}
              className="text-xs font-mono tracking-widest uppercase transition-colors duration-200 hover:text-[#d4a853]"
              style={{ color: linkColor }}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
