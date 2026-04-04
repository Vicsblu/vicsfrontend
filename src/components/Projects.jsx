import { useState } from "react";
import FadeIn from "./ui/FadeIn";
import SectionLabel from "./ui/SectionLabel";
import Tag from "./ui/Tag";
import { PROJECTS, PROJECT_TYPES } from "../data";

export default function Projects({ dark }) {
  const [filter, setFilter] = useState("All");

  const bg = dark ? "#0a0a0a" : "#fcf9f2";
  const textMain = dark ? "#f5f0e8" : "#0d0d0d";
  const textMuted = dark ? "#ffffff55" : "#00000055";
  const cardBorder = dark ? "#ffffff0d" : "#0000000d";
  const cardBg = dark ? "#ffffff03" : "#00000003";
  const gridLine = dark ? "#ffffff06" : "#00000008";
  const filterBorder = dark ? "#ffffff22" : "#00000022";
  const filterColor = dark ? "#ffffff55" : "#00000055";
  const problemBg = dark ? "#ffffff06" : "#0000000a";
  const problemColor = dark ? "#ffffff44" : "#00000044";
  const githubBorder = dark ? "#ffffff22" : "#00000022";
  const githubColor = dark ? "#ffffff66" : "#00000066";

  const filtered =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.type === filter);

  return (
    <section
      id="projects"
      style={{
        background: bg,
        borderTop: `1px solid ${dark ? "#ffffff0d" : "#0000000d"}`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-28">
        <FadeIn>
          <SectionLabel text="03 — Projects" />
          <h2
            className="text-4xl md:text-5xl font-bold mb-10"
            style={{
              fontFamily: "Georgia, serif",
              color: textMain,
              letterSpacing: "-0.02em",
            }}
          >
            Things I've built.
          </h2>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 mb-14">
            {PROJECT_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className="text-xs font-mono tracking-widest uppercase px-3 py-1.5 rounded-sm border transition-all duration-200"
                style={{
                  background: filter === type ? "#d4a853" : "transparent",
                  color: filter === type ? "#0a0a0a" : filterColor,
                  borderColor: filter === type ? "#d4a853" : filterBorder,
                }}
              >
                {type}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.08}>
              <div
                className="group border rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: cardBorder, background: cardBg }}
              >
                {/* Mock screenshot */}
                <div
                  className="h-48 flex items-center justify-center relative overflow-hidden"
                  style={{ background: `${project.color}15` }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `linear-gradient(${gridLine} 1px, transparent 1px), linear-gradient(90deg, ${gridLine} 1px, transparent 1px)`,
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <div
                    className="relative text-6xl font-bold font-mono"
                    style={{ color: `${project.color}33` }}
                  >
                    {project.title[0]}
                  </div>
                  <div className="absolute top-3 right-3">
                    <Tag label={project.type} color={project.color} />
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "Georgia, serif", color: textMain }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: textMuted, fontFamily: "Georgia, serif" }}
                  >
                    {project.description}
                  </p>

                  <div
                    className="p-3 rounded-sm mb-4 text-xs font-mono"
                    style={{ background: problemBg, color: problemColor }}
                  >
                    <span style={{ color: "#d4a85388" }}>Problem: </span>
                    {project.problem}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <Tag key={t} label={t} color={project.color} />
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.demo}
                      className="text-xs font-mono tracking-widest uppercase px-4 py-2 transition-all duration-200 hover:scale-105"
                      style={{ background: project.color, color: "#0a0a0a" }}
                    >
                      Live Demo ↗
                    </a>
                    <a
                      href={project.github}
                      className="text-xs font-mono tracking-widest uppercase px-4 py-2 border transition-all duration-200 hover:scale-105"
                      style={{ borderColor: githubBorder, color: githubColor }}
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
