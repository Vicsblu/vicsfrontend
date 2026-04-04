import { useTypingEffect } from "../hooks/useTypingEffect";
import { TYPING_PHRASES, HERO_STATS } from "../data";

export default function Hero({ dark }) {
  const typed = useTypingEffect(TYPING_PHRASES);
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const bg = dark ? "#0a0a0a" : "#fcf9f2";
  const textMain = dark ? "#f5f0e8" : "#0d0d0d";
  const textMuted = dark ? "#ffffff44" : "#00000044";
  const textSub = dark ? "#ffffff55" : "#00000055";
  const borderMuted = dark ? "#ffffff22" : "#00000022";
  const gridLine = dark ? "#ffffff06" : "#00000008";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: bg }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${gridLine} 1px, transparent 1px), linear-gradient(90deg, ${gridLine} 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: dark
            ? "radial-gradient(circle, #d4a85312 0%, transparent 70%)"
            : "radial-gradient(circle, #d4a85318 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
        {/* Available badge */}
        <div className="anim-fade-up-1">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full" style={{ background: "#7ec8a4" }} />
            <span
              className="text-xs font-mono tracking-[0.25em] uppercase"
              style={{ color: textMuted }}
            >
              Available for opportunities
            </span>
          </div>
        </div>

        {/* Name */}
        <div className="anim-fade-up-2">
          {["Victor", "Oguntoyinbo"].map((word) => (
            <h1
              key={word}
              className="font-bold leading-none"
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(3rem, 8vw, 7rem)",
                color: textMain,
                letterSpacing: "-0.02em",
                marginBottom: word === "Victor" ? "0.1em" : "0.5em",
              }}
            >
              {word}
            </h1>
          ))}
        </div>

        {/* Typewriter + tagline */}
        <div className="anim-fade-up-3">
          <div className="flex items-center gap-2 mb-6" style={{ minHeight: "2.5rem" }}>
            <span className="text-xl md:text-2xl font-mono" style={{ color: "#d4a853" }}>
              {typed}
            </span>
            <span
              className="w-0.5 h-6 animate-pulse"
              style={{ background: "#d4a853" }}
            />
          </div>
          <p
            className="max-w-md text-base leading-relaxed mb-10"
            style={{ color: textSub, fontFamily: "Georgia, serif" }}
          >
            Frontend developer with a designer's eye. I build interfaces that convert,
            perform, and feel genuinely good to use.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 anim-fade-up-4">
          <button
            onClick={() => scrollTo("projects")}
            className="px-6 py-3 text-sm font-mono tracking-widest uppercase transition-all duration-200 hover:scale-105"
            style={{ background: "#d4a853", color: "#0a0a0a" }}
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-6 py-3 text-sm font-mono tracking-widest uppercase border transition-all duration-200 hover:scale-105"
            style={{ borderColor: borderMuted, color: dark ? "#ffffff88" : "#00000088" }}
          >
            Contact Me
          </button>
          <a
            href="https://drive.google.com/file/d/1Y9ZW1uXGafaxy9ZY8VwBKybED9wi_p4A/view?usp=drivesdk"
            className="px-6 py-3 text-sm font-mono tracking-widest uppercase border transition-all duration-200 hover:scale-105 flex items-center gap-2"
            style={{ borderColor: "#d4a85344", color: "#d4a853" }}
          >
            ↓ Download CV
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 flex items-center gap-6 anim-fade-up-5">
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl font-bold font-mono"
                style={{ color: textMain }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs font-mono tracking-widest uppercase"
                style={{ color: textMuted }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
