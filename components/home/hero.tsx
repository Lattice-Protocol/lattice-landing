import Image from "next/image";

export const HomeHero: React.FC = () => {
  return (
    <main className="absolute top-0 left-0 w-full h-screen">
      <Image
        src="/images/home/hero-bg.png"
        alt="Lattice AI"
        fill
        priority
        unoptimized
        className=""
      />

      <div className="container relative z-10 mx-auto px-4 h-[80vh] flex items-center justify-center flex-col text-center">
        <div className="inline-flex items-center gap-2 bg-background/70 border-primary/80 text-secondary/80 rounded-full py-1 px-4 mb-4 md:mb-8 backdrop-blur-xs border">
          <div className="w-2 h-2 rounded-full bg-primary/80 animate-pulse"></div>
          <span className="text-xs md:text-sm font-mono">
            LLM Inference Network and OS
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold text-secondary mb-4 max-w-4xl mx-auto px-2">
          Decentralized intelligence, engineered for ownership.
        </h1>

        <h2 className="text-xl text-primary bg-secondary/10 w-fit px-2 font-mono font-bold max-w-2xl mx-auto mb-10 backdrop-blur-xs">
          Invest in LLMs. Earn from Usage. Power the future
          <span
            className="animate-pulse"
            style={{ animationDuration: "350ms" }}
          >
            ... █
          </span>
        </h2>

        <div className="flex flex-wrap gap-4 justify-center">
          <button className="glass-button bg-linear-to-r from-primary/80 to-[#FFB067]/80 p-2 rounded-lg border border-primary/20 hover:border-primary/40 hover:shadow-[0_0_15px_rgba(180,97,25,0.5)] transition-all duration-300 text-white">
            Explore the Network
          </button>
          <button className="glass-button p-2 rounded-lg border border-primary/20 hover:border-primary/40 text-secondary hover:bg-primary/10 transition-all duration-300">
            Read the Litepaper
          </button>
        </div>
      </div>
    </main>
  );
};
