"use client";

import { Badge } from "../ui";
import {
  ArrowRightIcon,
  BulbIcon,
  CaretRightIcon,
  ChatIcon,
  MeterIcon,
  RadioIcon,
} from "@/public/icons";
import { motion } from "framer-motion";
import Image from "next/image";

export const Users: React.FC = () => {
  const copy: {
    badge: string;
    image: string;
    title: string;
    subtitle: string;
    bullets: string[];
    ctas: {
      text: string;
      primary: boolean;
      icon: React.ReactNode;
    }[];
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
      ctas: [
        {
          text: "Contribute a node",
          primary: true,
          icon: <BulbIcon />,
        },
        {
          text: "View Active Nodes",
          primary: false,
          icon: <MeterIcon />,
        },
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
      ctas: [
        {
          text: "Launch Chat",
          primary: true,
          icon: <ChatIcon />,
        },
        {
          text: "Community",
          primary: false,
          icon: <RadioIcon />,
        },
      ],
    },
  ];

  return (
    <section className="bg-grid-lines px-36">
      {copy.map(({ badge, image, title, subtitle, bullets, ctas }) => (
        <div
          key={title}
          className="grid grid-cols-3 items-center justify-between mx-auto my-20"
        >
          <figure className="w-full flex items-center justify-center">
            <Image
              src={image}
              alt={title}
              height={360}
              width={360}
              className="rounded-xl mr-auto"
              priority
            />
          </figure>

          <div className="w-full col-span-2 h-full justify-start flex flex-col items-start gap-8">
            {badge && <Badge variant="default">{badge}</Badge>}

            <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>

            <p className="text-lg md:text-xl text-primary">{subtitle}</p>

            <ul className="space-y-3 md:space-y-4 my-4">
              {bullets.map((bullet, i) => (
                <motion.li
                  key={bullet}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                  className="flex items-center justify-start gap-3"
                >
                  <ArrowRightIcon
                    className="h-5 w-5 md:h-6 md:w-6 shrink-0"
                    fill="#E5C4A9"
                  />

                  <span className="text-foreground/80 font-semibold text-lg md:text-xl">
                    {bullet}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              {ctas.map(({ icon, text, primary }) => (
                <button
                  key={text}
                  className={`glass-button flex justify-center flex-row gap-2 group items-center p-2 px-4 rounded-lg border transition-all duration-300 ${
                    primary
                      ? "bg-linear-to-r from-primary/80 to-[#FFB067]/80 text-white border-primary/20 hover:border-primary/40 hover:shadow-[0_0_15px_rgba(180,97,25,0.5)]"
                      : "border-primary/20 bg-[#1F1F1F] backdrop-blur-lg hover:border-primary/40"
                  }`}
                >
                  <div
                    className={`${
                      primary ? "text-foreground" : "text-orange-600"
                    } w-6 h-6`}
                  >
                    {icon}
                  </div>

                  {text}

                  <CaretRightIcon
                    className={`${
                      primary ? "text-foreground" : "text-primary"
                    } h-4 group-hover:text-orange-600 transition-all duration-300`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
