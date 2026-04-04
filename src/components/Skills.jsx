import FadeIn from "./ui/FadeIn";
import SectionLabel from "./ui/SectionLabel";
import { SKILLS } from "../data";

export default function Skills({ dark }) {
  const bg = dark ? "#0f0f0f" : "#f5f0e8";
  const textMain = dark ? "#f5f0e8" : "#0d0d0d";
  const cardBg = dark ? "#ffffff05" : "#00000005";
  const cardBorder = dark ? "#ffffff0d" : "#0000000d";
  const skillColor = dark ? "#ffffff77" : "#00000077";
  const bulletColor = dark ? "#ffffff22" : "#00000022";

  return (
    <section
      id="skills"
      style={{
        background: bg,
        borderTop: `1px solid ${dark ? "#ffffff0d" : "#0000000d"}`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-28">
        <FadeIn>
          <SectionLabel text="02 — Skills" />
          <h2
            className="text-4xl md:text-5xl font-bold mb-16"
            style={{
              fontFamily: "Georgia, serif",
              color: textMain,
              letterSpacing: "-0.02em",
            }}
          >
            What I work with.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(SKILLS).map(([category, items], i) => (
            <FadeIn key={category} delay={i * 0.1}>
              <div
                className="p-7 rounded-sm border h-full transition-all duration-300 hover:scale-[1.02]"
                style={{ borderColor: cardBorder, background: cardBg }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "#d4a853" }}
                  />
                  <span
                    className="text-xs font-mono tracking-widest uppercase"
                    style={{ color: "#d4a853" }}
                  >
                    {category}
                  </span>
                </div>
                <div className="space-y-3">
                  {items.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <span className="text-xs" style={{ color: bulletColor }}>
                        ▸
                      </span>
                      <span className="text-sm font-mono" style={{ color: skillColor }}>
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
