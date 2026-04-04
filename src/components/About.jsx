import FadeIn from "./ui/FadeIn";
import SectionLabel from "./ui/SectionLabel";
import { ABOUT_FACTS } from "../data";

export default function About({ dark }) {
  const bg = dark ? "#0a0a0a" : "#fcf9f2";
  const textMain = dark ? "#f5f0e8" : "#0d0d0d";
  const textBody = dark ? "#ffffff88" : "#00000077";
  const rowBg = dark ? "#ffffff0a" : "#0000000a";

  return (
    <section
      id="about"
      style={{
        background: bg,
        borderTop: `1px solid ${dark ? "#ffffff0d" : "#0000000d"}`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-28">
        <FadeIn>
          <SectionLabel text="01 — About" />
          <h2
            className="text-4xl md:text-5xl font-bold mb-16"
            style={{
              fontFamily: "Georgia, serif",
              color: textMain,
              letterSpacing: "-0.02em",
            }}
          >
            The story so far.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Bio paragraphs */}
          <FadeIn delay={0.1}>
            <div
              className="space-y-5 text-base leading-relaxed"
              style={{ fontFamily: "Georgia, serif", color: textBody }}
            >
              <p>
                It started with Photoshop and a compulsion to make things look{" "}
                <em>right</em>. Years of graphic design work sharpened my eye — for
                hierarchy, for whitespace, for the difference between a layout that merely
                exists and one that communicates.
              </p>
              <p>
                Then I discovered that the most interesting design problems weren't on
                canvas — they were in the browser. I taught myself HTML, CSS, and
                JavaScript, and something clicked. Code wasn't just logic; it was the
                medium where design became real and interactive.
              </p>
              <p>
                Today I build frontend interfaces that sit at the intersection of
                engineering and design. I bring a designer's instinct to every component I
                write — asking not just "does it work?" but "does it <em>feel</em> right?"
              </p>
              <p>
                My background in IT support means I approach bugs and UX problems with the
                same patience: understand the system, isolate the issue, ship the fix.
              </p>
            </div>
          </FadeIn>

          {/* Fact table */}
          <FadeIn delay={0.2}>
            <div className="space-y-4">
              {ABOUT_FACTS.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 p-4 rounded-sm"
                  style={{ background: rowBg }}
                >
                  <span
                    className="text-xs font-mono tracking-widest uppercase pt-0.5 w-24 shrink-0"
                    style={{ color: "#d4a85388" }}
                  >
                    {label}
                  </span>
                  <span className="text-sm font-mono" style={{ color: textBody }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
