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
    <section className="flex justify-between px-36 items-center py-20">
      <div className="grid grid-cols-4 gap-x-4">
        {iconSlugs.map((slug, i) => (
          <motion.div
            key={slug}
            className="w-[64px] h-[64px] md:w-[100px] md:h-[100px] rounded-[20px] flex items-center justify-center 
                       bg-white backdrop-blur-xs 
                       border border-white/20 hover:border-white/40 
                       transition-all duration-500 hover:scale-105 mb-6"
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

      <div className="">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[1.75rem] sm:text-[2rem] md:text-[3.5rem] font-bold text-[#CE8E54] mb-4 lg:mb-6"
        >
          LLM OS Ecosystem
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#E5C4A9]/80 flex flex-col gap-3 text-[1rem] sm:text-[1.1rem] md:text-[1.25rem] font-mono font-semibold mb-6 lg:mb-8"
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
