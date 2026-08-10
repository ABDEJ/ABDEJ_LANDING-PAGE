"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  speed?: number;
  pauseAfterComplete?: number;
  loop?: boolean;
  className?: string;
};

export default function TypewriterText({
  text,
  speed = 60,
  pauseAfterComplete = 1200,
  loop = false,
  className = "",
}: Props) {
  const [displayed, setDisplayed] = useState("");
  const [isInView, setIsInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionPreference = () => {
      setPrefersReducedMotion(media.matches);
    };

    handleMotionPreference();
    media.addEventListener("change", handleMotionPreference);

    return () => media.removeEventListener("change", handleMotionPreference);
  }, []);

  useEffect(() => {
    const element = spanRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayed(text);
      return;
    }

    if (!isInView) {
      setDisplayed("");
      return;
    }

    let index = 0;
    let timeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;

    const startTyping = () => {
      setDisplayed("");
      index = 0;

      interval = setInterval(() => {
        index++;
        setDisplayed(text.slice(0, index));

        if (index >= text.length) {
          clearInterval(interval);

          if (loop) {
            timeout = setTimeout(() => {
              if (isInView) startTyping();
            }, pauseAfterComplete);
          }
        }
      }, speed);
    };

    startTyping();

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isInView, text, speed, pauseAfterComplete, loop, prefersReducedMotion]);

  return (
    <span
      ref={spanRef}
      className={`relative inline-grid align-bottom ${className}`}
      aria-label={text}
    >
      <span className="col-start-1 row-start-1 invisible" aria-hidden="true">
        {text}
      </span>
      <span className="col-start-1 row-start-1" aria-hidden="true">
        {displayed}
        <span className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.08em] animate-pulse rounded-full bg-[var(--secondary)] motion-reduce:hidden" />
      </span>
    </span>
  );
}
