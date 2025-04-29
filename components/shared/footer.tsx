"use client";

import { FullLogo } from ".";
import { RiTwitterLine, RiDiscordLine, RiGithubLine } from "@remixicon/react";
import Link from "next/link";

export const Footer: React.FC = () => {
  const trialCopy: {
    title: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  }[] = [
    {
      title: "Try Lattice AI",
      onClick: () => {},
    },
    {
      title: "Contact us",
      onClick: () => {},
    },
  ];

  const sitemapCopy: {
    title: string;
    links: {
      content: React.ReactNode;
      href: string;
    }[];
  }[] = [
    {
      title: "Why Lattice",
      links: [
        { content: "About us", href: "/" },
        { content: "Our customers", href: "/" },
        { content: "Careers", href: "/" },
        { content: "Contact us", href: "/" },
      ],
    },
    {
      title: "Explore",
      links: [
        { content: "AI solutions", href: "/" },
        { content: "Partners", href: "/" },
        { content: "Research", href: "/" },
        { content: "Documentation", href: "/" },
      ],
    },
    {
      title: "Legal",
      links: [
        { content: "Terms of service", href: "/" },
        { content: "Privacy policy", href: "/" },
        { content: "Data processing agreement", href: "/" },
        { content: "Legal notice", href: "/" },
      ],
    },
  ];

  const socialsCopy: {
    icon: React.ReactNode;
    href: string;
  }[] = [
    {
      icon: <RiTwitterLine />,
      href: "https://x.com/0xLattice",
    },
    {
      icon: <RiDiscordLine />,
      href: "https://discord.gg/lattice",
    },
    {
      icon: <RiGithubLine />,
      href: "https://github.com/lattice-ai",
    },
  ];

  return (
    <footer className="bg-[#1A1310]/80 py-12 px-36 flex flex-col items-center">
      <div className="pb-12 text-center">
        <h5 className="text-3xl md:text-4xl font-bold mb-6">
          The next chapter of AI is yours.
        </h5>

        <div className="flex items-center gap-4 justify-center">
          {trialCopy.map(({ title, onClick }) => (
            <button
              key={title}
              className="glass-button bg-primary text-white"
              onClick={onClick}
            >
              {title}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-stretch justify-between w-full border-t border-border/50 gap-8 pt-12">
        <div className="flex flex-col gap-4 justify-between">
          <div className="flex flex-col gap-4">
            <FullLogo />

            <div className="flex gap-2">
              {socialsCopy.map(({ icon, href }) => (
                <Link key={href} href={href} className="text-muted-foreground">
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-full">
            &copy; 2025 Lattice AI. All rights reserved.
          </p>
        </div>

        {sitemapCopy.map(({ links, title }) => (
          <div key={title} className="glass-card rounded-lg">
            <p className="font-medium mb-4">{title}</p>

            <ul className="space-y-2">
              {links.map(({ content, href }) => (
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
          </div>
        ))}
      </div>
    </footer>
  );
};
