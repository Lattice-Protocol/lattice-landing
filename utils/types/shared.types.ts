import type { MotionProps } from "framer-motion";
import type { LinkItemType } from "fumadocs-ui/layouts/shared";

export interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

export interface TerminalTextProps extends MotionProps {
  children: string;
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

export interface FullLogoProps {
  size?: number;
  className?: string;
}

export interface PageNavbarProps {
  commonLinks: LinkItemType[];
}

export interface PageNavItemProps {
  item: LinkItemType;
}
