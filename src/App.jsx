import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CaseStudies from "./components/CaseStudies";
import UXSection from "./components/UXSection";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div style={{ fontFamily: "monospace", minHeight: "100vh" }}>
      <Nav dark={dark} setDark={setDark} />
      <Hero dark={dark} />
      <About dark={dark} />
      <Skills dark={dark} />
      <Projects dark={dark} />
      <CaseStudies dark={dark} />
      <UXSection dark={dark} />
      <Certifications dark={dark} />
      <Contact dark={dark} />
      <Footer dark={dark} />
    </div>
  );
}
