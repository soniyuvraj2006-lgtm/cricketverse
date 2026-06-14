"use client";

import { useState, useEffect, useRef } from "react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

function useCountdown(targetHours = 5): TimeLeft {
  const endTimeRef = useRef<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: targetHours, minutes: 21, seconds: 53 });

  useEffect(() => {
    if (endTimeRef.current === null) {
      endTimeRef.current = Date.now() + targetHours * 60 * 60 * 1000;
    }

    const tick = () => {
      const remaining = endTimeRef.current! - Date.now();
      if (remaining <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        hours: Math.floor(remaining / (1000 * 60 * 60)),
        minutes: Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((remaining % (1000 * 60)) / 1000),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetHours]);

  return timeLeft;
}

function FlipDigit({ value, label }: { value: number; label: string }) {
  const [displayValue, setDisplayValue] = useState(value);
  const [isFlipping, setIsFlipping] = useState(false);
  const prevValue = useRef(value);

  useEffect(() => {
    if (value !== prevValue.current) {
      setIsFlipping(true);
      const timeout = setTimeout(() => {
        setDisplayValue(value);
        setIsFlipping(false);
        prevValue.current = value;
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [value]);

  const display = String(displayValue).padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          width: 64,
          height: 72,
          background: "rgba(0,0,0,0.5)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 8,
          boxShadow: "0 8px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        <div className="absolute left-0 right-0 top-1/2 z-10 h-px bg-black/40" />
        <span
          className="select-none font-mono font-bold text-primary"
          style={{
            fontSize: 36,
            lineHeight: 1,
            transform: isFlipping ? "rotateX(-90deg)" : "rotateX(0deg)",
            transition: "transform 150ms ease-in",
            display: "block",
          }}
        >
          {display}
        </span>
      </div>
      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">{label}</span>
    </div>
  );
}

export function FlashSaleTimer() {
  const timeLeft = useCountdown(5);
  const emergency = timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds <= 10;

  return (
    <div className={`flex items-end gap-2 ${emergency ? "animate-[emergency-pulse_0.5s_ease-in-out_infinite]" : ""}`}>
      <FlipDigit value={timeLeft.hours} label="HRS" />
      <span className="pb-[18px] font-mono text-[32px] font-bold text-gold/60">:</span>
      <FlipDigit value={timeLeft.minutes} label="MIN" />
      <span className="pb-[18px] font-mono text-[32px] font-bold text-gold/60">:</span>
      <FlipDigit value={timeLeft.seconds} label="SEC" />
    </div>
  );
}
