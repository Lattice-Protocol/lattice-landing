import type { MotionProps } from "framer-motion";
import type { TableOfContents } from "fumadocs-core/server";
import type { PageData } from "fumadocs-core/source";
import type { LinkItemType } from "fumadocs-ui/layouts/shared";
import type { MDXProps } from "mdx/types";
import type { FC } from "react";

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

export interface BlogType {
  file: {
    dirname: string;
    name: string;
    path: string;
    ext: string;
    flattenedPath: string;
  };
  url: string;
  slugs: string[];
  data: {
    title: string;
    description: string;
    image: string;
    full: boolean;
    author: string;
    date: string;
  };
}

export interface ArticlePageProps {
  metadata?: {
    title: string;
    content: string;
  }[];
  data: PageData;
  Mdx: FC<MDXProps>;
  toc: TableOfContents;
}
