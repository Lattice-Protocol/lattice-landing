import { BulbIcon, ChatIcon } from "@/public/icons";
import { BoltIcon } from "lucide-react";

export const Community: React.FC = () => {
  const iconClassName: string = "text-foreground/80 w-12 h-12";

  const copy: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[] = [
    {
      icon: <BulbIcon className={iconClassName} />,
      title: "Invest & Power OSS Models",
      description:
        "Pool capital to fund open-source language models. These models power the Lattice platform, with revenue shared as reward.",
    },
    {
      icon: <ChatIcon className={iconClassName} />,
      title: "AI Chat, Powered by the Crowd",
      description:
        "Open-source. Crypto-native. Agent-integrated. No subscriptions. No gatekeepers. Just pay-per-query freedom.",
    },
    {
      icon: <BoltIcon className={iconClassName} />,
      title: "Own the Network",
      description:
        "Power node or use platform with the LAI token. Decentralized and Uncensored - the future of intelligence.",
    },
  ];

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 md:py-20 lg:py-24 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div className="text-2xl sm:text-3xl font-mono flex flex-col gap-2 justify-center">
          <h5 className="text-orange-500/80">
            People's AI. Co
            <span className="text-xs sm:text-sm">[munnity]</span> Owned.
          </h5>
          <h5 className="text-lg sm:text-2xl">Earn from LLM model usage</h5>
        </div>

        <div>
          <h3 className="text-lg sm:text-2xl mb-4 font-bold">
            Invest into the latest LLM model and earn by powering Lattice chat
          </h3>
          <button className="bg-linear-to-r from-primary/80 to-[#FFB067]/80 p-2 sm:p-3 rounded-lg border border-primary/20 hover:border-primary/40 hover:shadow-[0_0_15px_rgba(180,97,25,0.5)] transition-all duration-300 text-white">
            Contribute to Node
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-12 md:mt-24 lg:mt-32 gap-8 lg:gap-0">
        {copy.map(({ icon, title, description }, idx) => (
          <div
            key={title}
            className={`flex flex-col px-4 sm:px-8 xl:px-20 py-8 lg:py-0 ${idx !== copy.length - 1 ? "lg:border-r lg:border-secondary/20" : ""}`}
          >
            <div>
              <figure className="mb-6">{icon}</figure>
              <div className="flex flex-col gap-2">
                <h5 className="text-lg sm:text-xl font-bold">{title}</h5>
                <p className="text-sm sm:text-base text-foreground/80">
                  {description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
