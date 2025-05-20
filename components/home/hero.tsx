import { Badge } from "@/components/ui";
import Image from "next/image";

export const HomeHero: React.FC = () => {
  return (
    <section className="relative top-0 left-0 min-h-screen w-full">
      <Image
        src="/images/home/hero-bg.png"
        alt="Lattice AI"
        fill
        priority
        unoptimized
        className="object-cover object-center"
      />

      <div className="relative mx-auto flex h-full min-h-screen flex-col items-center justify-center px-2 text-center sm:px-4">
        <Badge
          variant="default"
          className="mb-2 px-2 py-1 text-xs sm:mb-4 sm:px-3 sm:py-1.5 sm:text-sm md:text-base"
        >
          LLM Inference Network and OS
        </Badge>

        <h1 className="mx-auto mb-2 max-w-4xl px-1 text-center text-2xl font-bold sm:mb-4 sm:px-2 sm:text-4xl md:text-5xl lg:text-6xl">
          Decentralized intelligence, engineered for ownership.
        </h1>

        <h2 className="text-primary bg-secondary/10 mx-auto mb-6 w-fit max-w-2xl px-2 font-mono text-base font-bold backdrop-blur-xs sm:mb-10 sm:px-4 sm:text-xl">
          Invest in LLMs. Earn from Usage. Power the{" "}
          <span className="whitespace-nowrap">
            future
            <span className="animate-pulse duration-300">... █</span>
          </span>
        </h2>
      </div>
    </section>
  );
};
