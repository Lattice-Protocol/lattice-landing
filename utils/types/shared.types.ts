import type { MotionProps } from "framer-motion";

export interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

export interface TerminalTextProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export interface TerminalTextAnimatedProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
}
