"use client";

import { FullLogo } from ".";
import { GITHUB_URL, TWITTER_URL } from "@/utils/constants";
import { RiTwitterLine, RiDiscordLine, RiGithubLine } from "@remixicon/react";
import Link from "next/link";

export const Footer: React.FC = () => {
  const sitemapCopy: {
    content: React.ReactNode;
    href: string;
  }[] = [
    {
      content: "Litepaper",
      href: "/litepaper",
    },
    {
      content: "Blogs",
      href: "/blogs",
    },
  ];

  const socialsCopy: {
    icon: React.ReactNode;
    href: string;
  }[] = [
    {
      icon: <RiTwitterLine />,
      href: TWITTER_URL,
    },
    {
      icon: <RiGithubLine />,
      href: GITHUB_URL,
    },
  ];

  return (
    <footer className="bg-[#1A1310]/80 py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between w-full gap-y-8 gap-x-8">
        <div className="flex flex-col gap-4 justify-between items-center md:items-start">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <FullLogo />

            <div className="flex gap-2">
              {socialsCopy.map(({ icon, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-muted-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 items-center md:items-end">
          <ul className="flex gap-4 flex-wrap justify-center md:justify-end">
            {sitemapCopy.map(({ content, href }) => (
              <li key={content?.toString()}>
                <Link
                  href={href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {content}
                </Link>
              </li>
            ))}
          </ul>

          <p className="text-sm text-muted-foreground mt-full text-center md:text-right">
            &copy; 2025 Lattice AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
