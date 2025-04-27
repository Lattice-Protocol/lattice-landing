import { Badge } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

export const HomeHero: React.FC = () => {
  return (
    <section className="relative top-0 left-0 w-full h-screen">
      <Image
        src="/images/home/hero-bg.png"
        alt="Lattice AI"
        fill
        priority
        unoptimized
      />

      <div className="container relative z-10 mx-auto px-4 h-[80vh] flex items-center justify-center flex-col text-center">
        <Badge variant="default" className="mb-4">
          LLM Inference Network and OS
        </Badge>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-4 max-w-4xl mx-auto px-2">
          Decentralized intelligence, engineered for ownership.
        </h1>

        <h2 className="text-xl text-primary bg-secondary/10 w-fit px-2 font-mono font-bold max-w-2xl mx-auto mb-10 backdrop-blur-xs">
          Invest in LLMs. Earn from Usage. Power the future
          <span className="animate-pulse duration-300">... █</span>
        </h2>

        <div className="flex flex-wrap gap-4 justify-center">
          <button className="glass-button bg-linear-to-r from-primary/80 to-[#FFB067]/80 p-2 rounded-lg border border-primary/20 hover:border-primary/40 hover:shadow-[0_0_15px_rgba(180,97,25,0.5)] transition-all duration-300 text-white">
            Explore the Network
          </button>

          <Link
            href="/docs/litepaper"
            className="relative items-center justify-center inline-block p-4 border-primary/20 border px-5 py-3 overflow-hidden font-medium rounded-lg shadow-2xl group hover:border-primary/40"
          >
            <span className="absolute top-0 left-0 w-60 h-40 -mt-10 -ml-3 transition-all duration-700 bg-primary rounded-full blur-md ease" />
            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-secondary/20 rounded-full blur-md" />
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-secondary/10 rounded-full blur-md" />
            </span>

            <span className="relative text-white">Read the Litepaper</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
