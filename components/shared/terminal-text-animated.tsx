"use client";

import type { TerminalTextAnimatedProps } from "@/utils/types/shared.types";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export const TerminalTextAnimated: React.FC<TerminalTextAnimatedProps> = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "p",
  ...props
}) => {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, started]);

  return (
    <MotionComponent ref={elementRef} className={className} {...props}>
      {displayedText}
    </MotionComponent>
  );
};
