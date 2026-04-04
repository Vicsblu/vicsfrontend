import { useState } from "react";
import FadeIn from "./ui/FadeIn";
import SectionLabel from "./ui/SectionLabel";
import { CONTACT_LINKS } from "../data";

export default function Contact({ dark }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const bg = dark ? "#0a0a0a" : "#fcf9f2";
  const textMain = dark ? "#f5f0e8" : "#0d0d0d";
  const textMuted = dark ? "#ffffff44" : "#00000044";
  const labelColor = dark ? "#ffffff33" : "#00000033";
  const inputStyle = {
    background: dark ? "#ffffff06" : "#0000000a",
    color: textMain,
    borderColor: dark ? "#ffffff0d" : "#0000000d",
  };
  const linkBorder = dark ? "#ffffff0d" : "#0000000d";
  const linkBg = dark ? "#ffffff03" : "#00000003";
  const linkValueColor = dark ? "#ffffff77" : "#00000077";

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const FIELDS = [
    { key: "name", label: "Name", type: "text", placeholder: "Your name" },
    { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
  ];

  return (
    <section
      id="contact"
      style={{
        background: bg,
        borderTop: `1px solid ${dark ? "#ffffff0d" : "#0000000d"}`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-28">
        <FadeIn>
          <SectionLabel text="07 — Contact" />
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "Georgia, serif",
              color: textMain,
              letterSpacing: "-0.02em",
            }}
          >
            Let's build something.
          </h2>
          <p
            className="text-base mb-14"
            style={{ fontFamily: "Georgia, serif", color: textMuted }}
          >
            Open to frontend roles, freelance projects, and collaborations.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact form */}
          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-4">
              {FIELDS.map(({ key, label, type, placeholder }) => (
                <div key={key}>
                  <label
                    className="block text-xs font-mono tracking-widest uppercase mb-2"
                    style={{ color: labelColor }}
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    name={key}
                    value={form[key]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required
                    className="w-full px-4 py-3 text-sm font-mono rounded-sm border outline-none focus:border-[#d4a853] transition-colors"
                    style={inputStyle}
                  />
                </div>
              ))}

              <div>
                <label
                  className="block text-xs font-mono tracking-widest uppercase mb-2"
                  style={{ color: labelColor }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 text-sm font-mono rounded-sm border outline-none focus:border-[#d4a853] transition-colors resize-none"
                  style={inputStyle}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 text-sm font-mono tracking-widest uppercase transition-all duration-200 hover:scale-[1.02]"
                style={{ background: "#d4a853", color: "#0a0a0a" }}
              >
                {sent ? "Message Sent ✓" : "Send Message →"}
              </button>
            </form>
          </FadeIn>

          {/* Contact info links */}
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              {CONTACT_LINKS.map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 border rounded-sm transition-all duration-200 hover:border-[#d4a85344] hover:scale-[1.01] block"
                  style={{
                    borderColor: linkBorder,
                    background: linkBg,
                    textDecoration: "none",
                  }}
                >
                  <span className="text-xl" style={{ color: "#d4a853" }}>
                    {icon}
                  </span>
                  <div>
                    <div
                      className="text-xs font-mono tracking-widest uppercase mb-0.5"
                      style={{ color: labelColor }}
                    >
                      {label}
                    </div>
                    <div className="text-sm font-mono" style={{ color: linkValueColor }}>
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
