"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";

export function useTextScramble(text: string, trigger: boolean, duration = 500) {
  const [displayText, setDisplayText] = useState(text);
  const frameRef = useRef<number>();
  const startRef = useRef<number>();

  const scramble = useCallback(() => {
    const totalFrames = Math.floor(duration / 16);
    let frame = 0;

    const animate = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      frame++;

      const progress = frame / totalFrames;
      const output = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          const charProgress = progress - (i / text.length) * 0.5;
          if (charProgress >= 1) return char;
          if (charProgress <= 0) return CHARS[Math.floor(Math.random() * CHARS.length)];
          return Math.random() < charProgress
            ? char
            : CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplayText(output);

      if (frame < totalFrames) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayText(text);
      }
    };

    startRef.current = undefined;
    frameRef.current = requestAnimationFrame(animate);
  }, [text, duration]);

  useEffect(() => {
    if (trigger) {
      scramble();
    } else {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      setDisplayText(text);
    }
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [trigger, scramble, text]);

  return displayText;
}
