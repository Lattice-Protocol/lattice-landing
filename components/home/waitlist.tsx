import { Badge } from "../ui";
import Image from "next/image";

export const Waitlist: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-8 md:py-16 mb-10 md:mb-20">
      <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-y-12 lg:gap-x-16">
        <figure className="relative w-full max-w-md lg:max-w-xl aspect-square">
          <Image
            src="/images/home/halo.png"
            alt="Lattice AI"
            fill
            className="object-contain"
          />
        </figure>

        <div className="flex flex-col gap-4 md:gap-6 w-full max-w-md mx-auto p-4 md:p-0 text-center lg:text-left">
          <Badge variant="default" className="mx-auto lg:mx-0">
            Early Access
          </Badge>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Join the Waitlist
          </h2>

          <p className="text-foreground/80 text-base sm:text-lg">
            Be among the first to experience decentralized AI. Get early access
            to node deployment and platform features.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-2 md:mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-3 bg-[#1A1310]/70 border border-primary/20 rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary/40"
            />
            <button className="w-full sm:w-auto bg-linear-to-r from-primary/80 to-[#FFB067]/80 px-6 py-3 rounded-lg border border-primary/20 hover:border-primary/40 hover:shadow-[0_0_15px_rgba(180,97,25,0.5)] transition-all duration-300 text-white">
              Join
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
