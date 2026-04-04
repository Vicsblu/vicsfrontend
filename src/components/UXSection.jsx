import FadeIn from "./ui/FadeIn";
import SectionLabel from "./ui/SectionLabel";
import { PRINCIPLES } from "../data";

export default function UXSection({ dark }) {
  const bg = dark ? "#0a0a0a" : "#fcf9f2";
  const textMain = dark ? "#f5f0e8" : "#0d0d0d";
  const textMuted = dark ? "#ffffff44" : "#00000044";
  const textBody = dark ? "#ffffff55" : "#00000055";
  const cardBorder = dark ? "#ffffff0d" : "#0000000d";
  const cardBg = dark ? "#ffffff03" : "#00000003";

  return (
    <section
      id="ux-thinking"
      style={{
        background: bg,
        borderTop: `1px solid ${dark ? "#ffffff0d" : "#0000000d"}`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-28">
        <FadeIn>
          <SectionLabel text="05 — UI/UX Thinking" />
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "Georgia, serif",
              color: textMain,
              letterSpacing: "-0.02em",
            }}
          >
            Design principles I live by.
          </h2>
          <p
            className="text-base mb-14"
            style={{ fontFamily: "Georgia, serif", color: textMuted }}
          >
            Every interface I build is guided by these four values.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRINCIPLES.map((principle, i) => (
            <FadeIn key={principle.title} delay={i * 0.1}>
              <div
                className="p-6 border rounded-sm h-full transition-all duration-300 hover:-translate-y-1 hover:border-[#d4a85344]"
                style={{ borderColor: cardBorder, background: cardBg }}
              >
                <div className="text-3xl mb-5" style={{ color: "#d4a853" }}>
                  {principle.icon}
                </div>
                <h3
                  className="font-bold mb-2"
                  style={{ fontFamily: "Georgia, serif", color: textMain }}
                >
                  {principle.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "Georgia, serif", color: textBody }}
                >
                  {principle.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
