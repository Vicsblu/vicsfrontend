import { useState } from "react";
import FadeIn from "./ui/FadeIn";
import SectionLabel from "./ui/SectionLabel";
import { CASE_STUDIES } from "../data";

const FIELDS = ["Problem", "Approach", "Design Decisions", "Result"];
const fieldKey = (label) =>
  ({ Problem: "problem", Approach: "approach", "Design Decisions": "decisions", Result: "result" }[label]);

export default function CaseStudies({ dark }) {
  const [open, setOpen] = useState(null);

  const bg = dark ? "#0f0f0f" : "#f5f0e8";
  const textMain = dark ? "#f5f0e8" : "#0d0d0d";
  const textMuted = dark ? "#ffffff44" : "#00000044";
  const textBody = dark ? "#ffffff66" : "#00000066";
  const cardBorder = dark ? "#ffffff0d" : "#0000000d";
  const cardBg = dark ? "#ffffff03" : "#00000003";
  const divider = dark ? "#ffffff0a" : "#0000000a";

  return (
    <section
      id="case-studies"
      style={{
        background: bg,
        borderTop: `1px solid ${dark ? "#ffffff0d" : "#0000000d"}`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-28">
        <FadeIn>
          <SectionLabel text="04 — Case Studies" />
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "Georgia, serif",
              color: textMain,
              letterSpacing: "-0.02em",
            }}
          >
            How I think.
          </h2>
          <p
            className="text-base mb-14"
            style={{ color: textMuted, fontFamily: "Georgia, serif" }}
          >
            Click any study to expand the full breakdown.
          </p>
        </FadeIn>

        <div className="space-y-4">
          {CASE_STUDIES.map((cs, i) => (
            <FadeIn key={cs.id} delay={i * 0.1}>
              <div
                className="border rounded-sm overflow-hidden transition-all duration-300"
                style={{ borderColor: cardBorder }}
              >
                {/* Accordion header */}
                <button
                  onClick={() => setOpen(open === cs.id ? null : cs.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  style={{ background: cardBg }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-1 h-10 rounded-full"
                      style={{ background: cs.color }}
                    />
                    <div>
                      <div
                        className="text-base font-bold"
                        style={{ fontFamily: "Georgia, serif", color: textMain }}
                      >
                        {cs.title}
                      </div>
                      <div
                        className="text-xs font-mono mt-0.5"
                        style={{ color: textMuted }}
                      >
                        {cs.subtitle}
                      </div>
                    </div>
                  </div>
                  <span
                    className="text-lg transition-transform duration-300"
                    style={{
                      transform: open === cs.id ? "rotate(45deg)" : "none",
                      color: cs.color,
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Accordion body */}
                {open === cs.id && (
                  <div
                    className="px-6 pb-6 grid md:grid-cols-2 gap-6"
                    style={{ borderTop: `1px solid ${divider}` }}
                  >
                    {FIELDS.map((label) => (
                      <div key={label} className="pt-5">
                        <div
                          className="text-xs font-mono tracking-widest uppercase mb-2"
                          style={{ color: cs.color }}
                        >
                          {label}
                        </div>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ fontFamily: "Georgia, serif", color: textBody }}
                        >
                          {cs[fieldKey(label)]}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
