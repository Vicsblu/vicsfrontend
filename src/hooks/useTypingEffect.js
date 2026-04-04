import { useState, useEffect } from "react";

/**
 * Animates through an array of phrases with a typewriter effect.
 * @param {string[]} phrases - Array of strings to cycle through
 * @returns {string} The currently displayed text
 */
export function useTypingEffect(phrases) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIdx];
    let timeout;

    if (!deleting && charIdx < phrase.length) {
      timeout = setTimeout(() => setCharIdx((i) => i + 1), 60);
    } else if (!deleting && charIdx === phrase.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((i) => i - 1), 35);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setPhraseIdx((i) => (i + 1) % phrases.length);
    }

    setDisplayed(phrase.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx, phrases]);

  return displayed;
}
