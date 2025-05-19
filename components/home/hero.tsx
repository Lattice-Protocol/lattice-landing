import { Badge } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

export const HomeHero: React.FC = () => {
  return (
    <section className="relative top-0 left-0 w-full min-h-screen">
      <Image
        src="/images/home/hero-bg.png"
        alt="Lattice AI"
        fill
        priority
        unoptimized
        className="object-cover object-center"
      />

      <div className="relative mx-auto px-2 sm:px-4 h-full min-h-screen flex items-center justify-center flex-col text-center">
        <Badge
          variant="default"
          className="mb-2 sm:mb-4 text-xs sm:text-sm md:text-base px-2 py-1 sm:px-3 sm:py-1.5"
        >
          LLM Inference Network and OS
        </Badge>

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-2 sm:mb-4 max-w-4xl mx-auto px-1 sm:px-2">
          Decentralized intelligence, engineered for ownership.
        </h1>

        <h2 className="text-base sm:text-xl text-primary bg-secondary/10 w-fit px-2 sm:px-4 font-mono font-bold max-w-2xl mx-auto mb-6 sm:mb-10 backdrop-blur-xs">
          Invest in LLMs. Earn from Usage. Power the{" "}
          <span className="whitespace-nowrap">
            future
            <span className="animate-pulse duration-300">... █</span>
          </span>
        </h2>

        <div className="flex flex-row text-xs sm:text-sm flex-wrap gap-4 justify-center w-full max-w-md mx-auto">
          <button className="bg-primary p-2 sm:p-3 rounded-lg border border-primary/20 hover:border-primary/40 hover:shadow-[0_0_15px_rgba(180,97,25,0.5)] transition-all duration-300 text-white">
            Explore the Network
          </button>

          <Link
            href="/docs/litepaper"
            className="bg-primary p-2 sm:p-3 rounded-lg border border-primary/20 hover:border-primary/40 hover:shadow-[0_0_15px_rgba(180,97,25,0.5)] transition-all duration-300 text-white"
          >
            Read the Litepaper
          </Link>
        </div>
      </div>
    </section>
  );
};
