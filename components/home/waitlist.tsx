import { Badge } from "../ui";
import Image from "next/image";

export const Waitlist: React.FC = () => {
  return (
    <section className="min-h-[400px] md:min-h-[600px] w-full bg-[#0E0908]/80 px-36">
      <div className="flex flex-col md:flex-row w-full items-center">
        <figure className="relative w-[36rem] h-[36rem]">
          <Image
            src="/images/home/halo.png"
            alt="Lattice AI"
            fill
            className="object-contain"
          />
        </figure>

        <div className="flex flex-col gap-6 mx-auto p-4 md:p-0">
          <Badge variant="default">Early Access</Badge>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Join the Waitlist
          </h2>

          <p className="text-foreground/80 max-w-[300px] md:max-w-md">
            Be among the first to experience decentralized AI. Get early access
            to node deployment and platform features.
          </p>

          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-4 py-2 bg-[#1A1310]/70 border border-primary/20 rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-hidden focus:border-primary/40"
            />
            <button className="w-full sm:w-auto glass-button bg-linear-to-r from-primary/80 to-[#FFB067]/80 px-6 py-2 rounded-lg border border-primary/20 hover:border-primary/40 hover:shadow-[0_0_15px_rgba(180,97,25,0.5)] transition-all duration-300 text-white">
              Join
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
