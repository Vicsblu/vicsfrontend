import FadeIn from "./ui/FadeIn";
import SectionLabel from "./ui/SectionLabel";
import { CERTS } from "../data";

export default function Certifications({ dark }) {
  const bg = dark ? "#0f0f0f" : "#f5f0e8";
  const textMain = dark ? "#f5f0e8" : "#0d0d0d";
  const cardBorder = dark ? "#ffffff0d" : "#0000000d";
  const cardBg = dark ? "#ffffff03" : "#00000003";
  const issuerColor = dark ? "#ffffff44" : "#00000044";

  return (
    <section
      id="certifications"
      style={{
        background: bg,
        borderTop: `1px solid ${dark ? "#ffffff0d" : "#0000000d"}`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-28">
        <FadeIn>
          <SectionLabel text="06 — Certifications" />
          <h2
            className="text-4xl md:text-5xl font-bold mb-14"
            style={{
              fontFamily: "Georgia, serif",
              color: textMain,
              letterSpacing: "-0.02em",
            }}
          >
            Credentials.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5">
          {CERTS.map((cert, i) => (
            <FadeIn key={cert.name} delay={i * 0.1}>
              <div
                className="p-6 border rounded-sm transition-all duration-300 hover:scale-[1.02]"
                style={{
                  borderColor: cardBorder,
                  borderLeftColor: cert.color,
                  borderLeftWidth: 3,
                  background: cardBg,
                }}
              >
                <div
                  className="text-2xl font-bold font-mono mb-1"
                  style={{ color: cert.color }}
                >
                  {cert.year}
                </div>
                <h3
                  className="font-bold mb-1"
                  style={{
                    fontFamily: "Georgia, serif",
                    color: textMain,
                    fontSize: "0.95rem",
                  }}
                >
                  {cert.name}
                </h3>
                <p
                  className="text-xs font-mono"
                  style={{ color: issuerColor }}
                >
                  {cert.issuer}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
