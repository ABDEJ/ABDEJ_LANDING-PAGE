"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  text: string;
  speed?: number;
  pauseAfterComplete?: number;
  className?: string;
};

export default function TypewriterText({
  text,
  speed = 60,
  pauseAfterComplete = 1200,
  className = "",
}: Props) {
  const [displayed, setDisplayed] = useState("");
  const [isInView, setIsInView] = useState(false);
  const spanRef = useRef<HTMLSpanElement | null>(null);

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
    if (!isInView) {
      setDisplayed("");
      return;
    }

    let index = 0;
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    const startTyping = () => {
      setDisplayed("");
      index = 0;

      interval = setInterval(() => {
        index++;
        setDisplayed(text.slice(0, index));

        if (index >= text.length) {
          clearInterval(interval);

          timeout = setTimeout(() => {
            if (isInView) startTyping();
          }, pauseAfterComplete);
        }
      }, speed);
    };

    startTyping();

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isInView, text, speed, pauseAfterComplete]);

  return (
    <span ref={spanRef} className={className}>
      {displayed}
    </span>
  );
}