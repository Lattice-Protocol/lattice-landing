"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const LLMOS: React.FC = () => {
  const iconSlugs: string[] = [
    "github",
    "slack",
    "gmail",
    "zapier",
    "supabase",
    "reddit",
    "rss",
    "whatsapp",
    "jira",
    "scrapy",
    "amazonwebservices",
    "fiverr",
  ];

  return (
    <section className="flex flex-col items-center justify-between gap-x-16 gap-y-12 px-12 py-20 md:px-20 xl:flex-row xl:px-36">
      <div className="grid min-w-fit grid-cols-4 gap-x-4">
        {iconSlugs.map((slug, i) => (
          <motion.div
            key={slug}
            className="mb-6 flex h-[64px] w-[64px] items-center justify-center rounded-[20px] border border-white/20 bg-white backdrop-blur-xs transition-all duration-500 hover:scale-105 hover:border-white/40 md:h-[100px] md:w-[100px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={`https://cdn.simpleicons.org/${slug}?viewbox=auto`}
              alt={`Lattice AI - ${slug}`}
              height={48}
              width={48}
              className="object-contain"
              unoptimized
            />
          </motion.div>
        ))}
      </div>

      <div className="mx-auto w-full md:w-10/12 xl:w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-[1.75rem] font-bold text-[#CE8E54] sm:text-[2rem] md:text-[3.5rem] lg:mb-6"
        >
          LLM OS Ecosystem
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 flex flex-col gap-3 font-mono text-[1rem] font-semibold text-[#E5C4A9]/80 sm:text-[1.1rem] md:text-[1.25rem] lg:mb-8"
        >
          <p className="h-fit">One Click add MCP, A2A, and plugins.</p>
          <p className="h-fit">
            Build and deploy integrations to Lattice to earn from usage.
          </p>
          <p className="h-fit">
            Straight to Lattice Chat or API, with people powered LLMs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
