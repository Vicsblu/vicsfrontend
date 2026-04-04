import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data";

/**
 * Fixed top navigation with scroll-aware blur, dark/light toggle, and mobile menu.
 */
export default function Nav({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase().replace(" ", "-"))
      ?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? dark
            ? "rgba(10,10,10,0.92)"
            : "rgba(252,249,242,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? `1px solid ${dark ? "#ffffff0d" : "#0000000d"}`
          : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="font-mono text-sm tracking-widest" style={{ color: "#d4a853" }}>
          VO_
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-xs font-mono tracking-widest uppercase transition-colors duration-200"
              style={{ color: dark ? "#ffffff88" : "#00000066" }}
              onMouseEnter={(e) => (e.target.style.color = "#d4a853")}
              onMouseLeave={(e) =>
                (e.target.style.color = dark ? "#ffffff88" : "#00000066")
              }
            >
              {link}
            </button>
          ))}

          {/* Theme toggle */}
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle color theme"
            className="w-8 h-8 rounded-full border flex items-center justify-center text-xs transition-all duration-200"
            style={{
              borderColor: dark ? "#ffffff22" : "#00000022",
              color: dark ? "#ffffff88" : "#00000066",
            }}
          >
            {dark ? "◑" : "◐"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
          style={{ color: dark ? "#ffffff88" : "#00000088" }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: dark ? "#0a0a0a" : "#fcf9f2" }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm font-mono tracking-widest uppercase text-left"
              style={{ color: dark ? "#ffffff88" : "#00000066" }}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => setDark((d) => !d)}
            className="text-sm font-mono tracking-widest uppercase text-left"
            style={{ color: "#d4a853" }}
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
