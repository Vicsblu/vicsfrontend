import { useRef, useState, useEffect } from "react";

/**
 * Returns a [ref, inView] pair. inView becomes true once the element
 * intersects the viewport and stays true (one-shot animation trigger).
 * @param {number} threshold - IntersectionObserver threshold (0–1)
 */
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}
