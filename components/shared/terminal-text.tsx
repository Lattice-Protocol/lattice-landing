"use client";

import type { TerminalTextProps } from "@/utils/types/shared.types";
import { motion } from "framer-motion";

export const TerminalText: React.FC<TerminalTextProps> = ({
  children,
  delay = 0,
  className,
  ...props
}) => (
  <motion.p
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: delay / 1000 }}
    className={className}
    {...props}
  >
    {children}
  </motion.p>
);
