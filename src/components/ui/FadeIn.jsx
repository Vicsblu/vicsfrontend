import { useInView } from "../../hooks/useInView";

/**
 * Wraps children in a div that fades + slides up when scrolled into view.
 * @param {{ children: React.ReactNode, delay?: number, className?: string }} props
 */
export default function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
