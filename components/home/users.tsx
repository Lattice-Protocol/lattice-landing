"use client";

import { Badge } from "../ui";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export const Users: React.FC = () => {
  const copy: {
    badge: string;
    image: string;
    title: string;
    subtitle: string;
    bullets: string[];
  }[] = [
    {
      badge: "for Node Contributors",
      image: "/images/home/server-voxel.png",
      title: "🔧 Run Nodes, Power Intelligence",
      subtitle:
        "Fuel the next generation of open source AI with just few clicks. Contribute to a transparent, token-powered economy that rewards real usage.",
      bullets: [
        "Pay for compute costs of models like LLaMA, DeepSeek, and more",
        "Earn from usage of these models on the platform",
        "Build on neutral, censorship-resistant AI infrastructure",
        "Invest and Earn while powering the network",
      ],
    },
    {
      badge: "for Platform Users",
      image: "/images/home/agent-voxel.png",
      title: "One Interface, Infinite Intelligence",
      subtitle:
        " Sail through your workflows powered by seamless integrations of Lattice LLM OS. ",
      bullets: [
        "Use state-of-the-art open-source models powered by the community",
        "Pay as you go with crypto — no subscriptions",
        "Built-in support for MCP servers to extend context and capabilities",
        "Agentic chat with memory, tools, and functions",
        "Switch models, clients, and tools from one interface",
      ],
    },
  ];

  return (
    <section className="bg-grid-lines px-4 sm:px-8 md:px-12 lg:px-24 xl:px-36">
      {copy.map(({ badge, image, title, subtitle, bullets }) => (
        <div
          key={title}
          className="grid grid-cols-1 lg:grid-cols-3 items-center justify-between mx-auto my-12 lg:my-20 gap-y-8 lg:gap-y-0 gap-x-0 lg:gap-x-8"
        >
          <figure className="w-full flex items-center justify-center mb-4 lg:mb-0">
            <Image
              src={image}
              alt={title}
              height={320}
              width={320}
              className="rounded-xl mx-auto"
              priority
            />
          </figure>

          <div className="w-full col-span-2 h-full justify-start flex flex-col items-start gap-6 lg:gap-8">
            {badge && <Badge variant="default">{badge}</Badge>}

            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold">
              {title}
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-primary">
              {subtitle}
            </p>

            <ul className="space-y-3 sm:space-y-4 my-2 sm:my-4">
              {bullets.map((bullet, i) => (
                <motion.li
                  key={bullet}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                  className="flex items-center justify-start gap-3"
                >
                  <ArrowRightIcon
                    className="h-5 w-5 sm:h-6 sm:w-6 shrink-0"
                    fill="#E5C4A9"
                  />

                  <span className="text-foreground/80 font-semibold text-base sm:text-lg lg:text-xl">
                    {bullet}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};
