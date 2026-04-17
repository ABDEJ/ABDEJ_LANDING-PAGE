"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
};

export default function AnimatedSection({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: AnimatedSectionProps) {
  const getInitial = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -60 };
      case "right":
        return { opacity: 0, x: 60 };
      default:
        return { opacity: 0, y: 40 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}