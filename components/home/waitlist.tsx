import { Badge } from "../ui";
import Image from "next/image";

export const Waitlist: React.FC = () => {
  return (
    <section className="mb-10 w-full px-4 py-8 sm:px-8 md:mb-20 md:px-16 md:py-16 lg:px-24 xl:px-36">
      <div className="flex w-full flex-col items-center justify-center gap-y-12 lg:flex-row lg:gap-x-16">
        <figure className="relative aspect-square w-full max-w-md lg:max-w-xl">
          <Image
            src="/images/home/halo.png"
            alt="Lattice AI"
            fill
            className="object-contain"
          />
        </figure>

        <div className="mx-auto flex w-full max-w-md flex-col gap-4 p-4 text-center md:gap-6 md:p-0 lg:text-left">
          <Badge variant="default" className="mx-auto lg:mx-0">
            Early Access
          </Badge>

          <h2 className="text-foreground text-2xl font-bold sm:text-3xl md:text-4xl">
            Join the Waitlist
          </h2>

          <p className="text-foreground/80 text-base sm:text-lg">
            Be among the first to experience decentralized AI. Get early access
            to node deployment and platform features.
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row md:mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border-primary/20 text-foreground placeholder:text-foreground/50 focus:border-primary/40 w-full rounded-lg border bg-[#1A1310]/70 px-4 py-3 focus:outline-none sm:flex-1"
            />
            <button className="from-primary/80 border-primary/20 hover:border-primary/40 w-full rounded-lg border bg-linear-to-r to-[#FFB067]/80 px-6 py-3 text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(180,97,25,0.5)] sm:w-auto">
              Join
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
