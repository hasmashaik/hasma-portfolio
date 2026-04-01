import { useState, useEffect, useRef } from 'react';

export default function useTypewriter(words, speed = 80, deleteSpeed = 40, pause = 2200) {
  const [index, setIndex]     = useState(0);
  const [text, setText]       = useState('');
  const [deleting, setDeleting] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    const word = words[index];
    if (!deleting && text.length < word.length) {
      timer.current = setTimeout(() => setText(word.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === word.length) {
      timer.current = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timer.current = setTimeout(() => setText(text.slice(0, -1)), deleteSpeed);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setIndex(i => (i + 1) % words.length);
    }
    return () => clearTimeout(timer.current);
  }, [text, deleting, index, words, speed, deleteSpeed, pause]);

  return text;
}
